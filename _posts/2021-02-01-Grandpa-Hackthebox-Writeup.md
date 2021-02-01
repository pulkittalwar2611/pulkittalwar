---
title: Grandpa Hackthebox Writeup
date: 2021-02-01 23:00:00 +0530
categories: [Hackthebox, Retired]
tags: [windows,metasploit,iis 6,local exploit suggester]     # TAG names should always be lowercase
image: /assets/img/grandpa-hackthebox/grandpa-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Grandpa:~$


Column | Details
------------ | -------------
Name | Grandpa
IP | 10.10.10.14
Points | 20
Os | Windows
Difficult | Low
Creator | [cha4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 12th April 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Exploiting Vulnerable `Microsoft IIS 6.0` version using *Metasploit*.
* Got `Root` using `local-exploit-suggester` on metasploit.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/grandpa-hackthebox/nmap-scan-1.png)

We can see *PUT* is one of the `http method` allowed.

Let's run `davtest` first to check which extensions are allowed to be uploaded.

**Command**: *davtest -url 10.10.10.14*

___
![](/assets/img/grandpa-hackthebox/davtest-3.png)

None of the extensions are allowed, but we know an outdated version of `Microsoft IIS 6.0` is running. Let's look into `searchsploit`.

___
![](/assets/img/grandpa-hackthebox/searchsploit-4.png)

Let's try this `Microsoft IIS 6.0 - WebDAV 'ScStoragePathFromUrl' Remote Buffer Overflow` using **Metasploit**.

___
![](/assets/img/grandpa-hackthebox/msfconsole-command-5.png)

Setting up the exploit.

___
![](/assets/img/grandpa-hackthebox/exploit-show-options-6.png)

Got `shell`.

___
![](/assets/img/grandpa-hackthebox/got-shell-7.png)

After that I tried `getuid` but got an error saying *Access Denied*, let's migrate to another process first.

___
![](/assets/img/grandpa-hackthebox/migrating-to-new-7.png)

For `Privilege Escalation` I used *local_exploit_suggester* module on metasploit.

___
![](/assets/img/grandpa-hackthebox/using-local_exploit_suggester-8.png)

Result: 

___
![](/assets/img/grandpa-hackthebox/local-exploit-suggester-result-9.png)

Using `exploit/windows/local/ms14_070_tcpip_ioctl` to escalate our privileges.

___
![](/assets/img/grandpa-hackthebox/show-options-10.png)

Got `Root`.

___
![](/assets/img/grandpa-hackthebox/got-root-shell-12.png)



