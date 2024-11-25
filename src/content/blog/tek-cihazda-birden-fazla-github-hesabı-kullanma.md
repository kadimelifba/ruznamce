---
author: kadimelifba
pubDatetime: 2024-11-24T10:37:00+03:00
# modDatetime: 2024-11-24T10:37:00+03:00
title: Tek cihâzda birden fazla Github hesabı kullanma
slug: tek-cihazda-birden-fazla-github-hesabı-kullanma
featured: true
draft: false
tags:
  - ssh
  - git
  - github
description:
  Bazı hallerde üzerinde çalıştığımız tarhları muhtelif Github hesaplarında muhafaza etmek isteriz.
  İşbu hallerde nasıl hareket edeceğimizi anlatan bir rehberdir.
---

İşbu rehberle tek bir cihâzdan muhtelif Github hesaplarına SSH vasıtasile bağlanmayı ve üzerinde çalıştığınız
tarhların hangi hesaba ait olduğuna dair ayarlamayı taallüm edeceksiniz.

İşbu rehber Microsoft Windows 10 için hazırlanmıştır.

## Fihrist

## Kullanacağımız Nermefzârlar

Üzerinde çalıştığımız tarhların kademelerini kayıt ve idare etmek için kullandığım Git ve Github nermefzârlarını kullanacağız.
Github tarhlarımızı saklayacağımız bir mahzendir. Git ise tarhlarımızın kademelerini takip ve idare etmemizi sağlar.
VS Code nermefzârını ferman yazmak için kullanırız. Yazdığımız fermanları inşa etmek ve dahi tecrübe etmek için PowerShell isimli
emirgâhı kullanırız.

- Git and Git Bash
- Github
- VS Code
- PowerShell

Mezkûr nermefzârların ağ sahifeleri:

[Git](https://git-scm.com/)
[Github](https://github.com/)
[VS Code](https://code.visualstudio.com/)
[PowerShell](https://github.com/PowerShell/PowerShell)

Üstteki ağ sahifelerinden işbu nermefzârları indirelim ve cihâzımıza kuralım.

## SSH Ayarları

### SSH Milefi

SSH anahtarlarını şahsî milefimizde bir alt-milef açarak muhafaza edeceğiz. Şahsî milefinizi `C:\Users\ben` gibi bir yerdedir. Ben kelimesini kendi hesap isminizle değiştirin.
İşbu milefin içine .shh isimli bir alt-milef açın. SSH anahtarlarımızı `C:\Users\ben\.ssh` alt-milefinde muhafaza edeceğiz.

### SSH Anahtarları

2 farklı Github hesabile kullanmak için 2 adet SSH anahtarı hazırlayacağız. Her bir anahtar sır ve faş olmak üzeri çift olarak ibda edilir.
Faş olanı muhataplarımıza veririz. Sır olanı ise saklarız. Muhataplarımızla irtibat kuracağımız vakit sır olanı kullanırız ki bu sayede muhatabımız
elindeki faş olan anahtarla talimatın bizden geldiğine emin olabilsin. Aşağıdaki emri hem `githubHesapA` hem `githubHesapB` olarak emirgâha verelim.

```ps1
ssh-keygen -t ed25519 -C "githubHesapA"
```

İşbu emri verdikten sonra bizden anahtar ismini talep edecektir. Anahtar ismimizi milefi ile beraber vereceğiz, şöyle ki:

```ps1
Generating public/private ed25519 key pair.
Enter file in which to save the key (C:\Users\ben/.ssh/id_ed25519): .ssh\id_ed25519_github_hesapA
```

Aynı şekilde `githubHesapB` için de _.ssh\id_ed25519_github_hesapB_ diyerek yapalım.

Anahtarlar hazır oldukta, `C:\Users\ben\.ssh` milefini açıp tedkik edebilirsiniz. Her anahtar çift olarak gelir, faş olanın sonunda .pub yazarken
sır olanın sonunda bir şey yazmaz.

> Emniyetiniz için anahtarlarınızı ibda ederken bir şifre tayin edebilirsiniz.

### SSH Ayar Sicili

`C:\Users\ben\.ssh` milefi içerisinde bir ayar sicili ibda edeceğiz. İşbu sicilin ismi **config** olmalıdır. `C:\Users\ben\.ssh\config` sicili hazır olunca
bir metin tashihçisi ile aşağıdaki şekilde ayarlamaları yapalım:

```
Host githubHesapA
    HostName github.com   # An address to SSH to.
    User git
    IdentityFile ~/.ssh/id_ed25519_github_hesapA
    IdentitiesOnly yes

Host githubHesapB
    HostName github.com   # An address to SSH to.
    User git
    IdentityFile ~/.ssh/id_ed25519_github_hesapA
    IdentitiesOnly yes
```

### SSH-Agent

Cihâzımızdaki _SSH-Agent_ hizmetini faal hale getirmeliyiz. Services isimli tatbiği aratalım ve _OpenSSH Authentication Agent_ isimli hizmeti
faal hale getirelim. İlaveten, açılış tarzını ihtiyarî (automatic) yapalım ki tekrar tekar işbu hizmeti başlatmamız gerekmesin.

Mezkûr hizmet faal olunca aşağıdaki talimat ile SSH anahtarlarımızı tanıtalım:

```
ssh-add C:\Users\ben\.ssh\id_ed25519_github_hesapA
```

Aynısını hesapB içinde yapalım.

## Gayretgâh

Şimdi tarhlarımızı tertipli bir şekilde tutmak için 2 adet milef ibda edeceğiz. Bunlar: `D:\Gayretgah\hesapA` ve `D:\Gayretgah\hesapB` olacaklar.
Her hesabın sahip olduğu tarhları kendine ait olan milefte muhafaza edeceğiz.

## .gitconfig Ayar Sicili

Birden fazla Github hesabı kullanmak istediğimiz için birden fazla hesabın bilgilerini bir şekilde tutabilmeliyiz. Bunun için `C:\Users\ben\.gitconfig` ayar sicilini
aşağıdaki gibi hazırlayalım. Bu ayarlar ile Git talimatlarının cari oldukları milefe göre kullanacağı hesap bilgilerini tayin etmiş olacağız.

```
[includeIf "gitdir:D:/Gayretgah/hesapA/"]
	path = ./.gitconfig-hesapA
[includeIf "gitdir:D:/Gayretgah/hesapB/"]
	path = ./.gitconfig-hesapB
```

Şimdi, üstteki sicile ilaveten 2 adet daha ayar sicili hazırlayacağız ki bunlar: `C:\Users\ben\.gitconfig-hesapA` ve `C:\Users\ben\.gitconfig-hesapB` sicilleridir.

```
[user]
	name = hesapA
	email = hesapA@gmail.com
[core]
	sshCommand = "ssh -i ~/.ssh/id_ed25519_github_hesapA"
```

Aynısını _hesapB_ içinde hazır edelim.

## Github SSH Ayarları

**PowerShell** isimli emirgâhı açalım ve aşağıdaki talimatı verelim ve faş olan anahtarı hafızaya alalım.

```ps1
 cat ~/.ssh/id_ed25519_github_hesapA.pub
```

Yahut **Git Bash** isimli emirgâh ile:

```bash
clip < ~/.ssh/id_ed25519_github_hesapA.pub
```

Github nermefzârını açalım ve hesaplarımızdan birine duhul edelim. SSH ayarları için `https://github.com/settings/keys` raptını takip edelim.
**New SSH Key** yazan tuşa tıklayıp evvelki talimatla hafızaya aldığımız faş anahtarı yapıştıralım. Sonra kayıt edelim.

Aynısını hesapB için de yapalım.

## Github Gencînesi

Github nermefzârını açalım ve muhafaza etmek istediğimiz tarhımız için bir gencîne ibda edelim. Gencîne hazır olunca hızlı ayar için olan sahife
karşımıza çıkacaktır. Orada HTTPS yerine SSH şıkkını seçelim ve SSH için olan raptı hafızaya alalım.

SSH raptı şu kalıpta olmalıdır: `git@github.com:hesapA/tarh-tecrubi.git`

[SSS Ayar Sicili](#ssh-ayar-sicili) kısmında **githubHesapA** diyerek `github.com` raptına işaret etmiş ve işbu hesaba bağlanırken kullanacağımız
SSH anahtarını dahi tayin etmiştik. Şimdi, hafızaya aldığımız SSH raptını tadil edeceğiz:

SSH raptı şu şekle getirmeliyiz: `githubHesapA:hesapA/tarh-tecrubi.git`

## Tarh İbdası

Tecrübe için yeni bir milef açalım. Bu milefin içinde iken bir _PowerShell_ emirgâhı çalıştıralım ve aşağıdaki talimatları verelim.

```ps1
git init
git remote set-url origin githubHesapA:hesapA/tarh-tecrubi.git
git branch -M merkezi

# Ve eğer tarhımızı gencîneye aktarmak istersek
git add .
git commit -m "iptidaî"
git push -u origin merkezi
```

Bundan sonra ibda edeceğimiz her tarhı `git remote set-url` talimatile dilediğimiz Github hesabındaki bir gencîneye bağlayabiliriz.
Tarhımızı orada muhafaza edip, kademelerini takip ve idare edebiliriz.
