---
title: Beep Hackthebox Writeup
date: 2020-12-26 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,ssh,freepbx,elastix,lfi]     # TAG names should always be lowercase
image: /assets/img/beep-hackthebox/beep-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Beep:~$


Column | Details
------------ | -------------
Name | Beep
IP | 10.10.10.7
Points | 20
Os | Linux
Difficult | Easy
Creator | [ch4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 15th March 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* `Elastix` is running on port 80/443.
* Using `dirbuster` for directory search and found an `/admin` login page.
* Version running is `FreePBX 2.8.1.4`, googled `Elastix FreePBX 2.8.1.4` which gave **Elastix graph.php LFI** exploit.
* Got Admin Credentials and loggedin via ssh.

# Starting:~$

## Nmap

**Nmap Command** : `nmap -T4 -sV -Pn 10.10.10.7`

___
![](/assets/img/beep-hackthebox/nmap-scan-1.png)

From a `quick scan` we know that the following ports are open : `22,25,80,110,111,143,443,993,995,3306,4445,10000`.
Accessing Port 80 first. (*port 443 also gave the same output.*)

I saved the `10.10.10.7` and `beep.htb` in **/etc/hosts** of my machine.

___
![](/assets/img/beep-hackthebox/port-80-2.png)

`Elastix` is running on port 80 and 443.

Using `dirubuster` for **directory search**, wordlist used : *medium directory 2.3 txt*. We got `/admin` as one of the directory.

___
![](/assets/img/beep-hackthebox/dirbuster-2.png)

We got a dialogue box asking for credentials to `login`.

___
![](/assets/img/beep-hackthebox/admin-page-3.png)

I clicked on `cancel` and got to know the version which is `FreePBX 2.8.1.4`

___
![](/assets/img/beep-hackthebox/unauthorized-admin-page-4.png)

I googled about `elastix freeopbx 2.8.1.4` and found something related to [*graph.php LFI*](https://www.exploit-db.com/exploits/37637)

___
![](/assets/img/beep-hackthebox/lfi-exploit-7.png)

After running the exploit, I got this:

**URL for LFI exploitation** : *https://beep.htb/vtigercrm/graph.php?current_language=../../../../../../../..//etc/amportal.conf%00&module=Accounts&action*

___
![](/assets/img/beep-hackthebox/LFI-username-and-passwords-10.png)

We got **Username** as `admin` and **Password** as `jEhdIekWmdjE`.
I directly accessed the `SSH port`, but encountered this error:

___
![](/assets/img/beep-hackthebox/accessing-ssh-with-admin-creds-14.png)

After a bit of googling, found this useful [link]( https://unix.stackexchange.com/questions/340844/how-to-enable-diffie-hellman-group1-sha1-key-exchange-on-debian-8-0)

Accessing `SSH port` again with new commands, gave me the `Root` access.

**Command** : *ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 root@10.10.10.7*

I tried `admin` for **username** first but didn't work, then i used `root` for successful login.

___
![](/assets/img/beep-hackthebox/loggedin-as-root-15.png)
