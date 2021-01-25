---
title: Blue Hackthebox Writeup
date: 2021-01-13 04:00:00 +0800
categories: [Hackthebox, Retired]
tags: [windows,smb,eternal blue,ms17-010,metasploit]     # TAG names should always be lowercase
image: /assets/img/blue-hackthebox/blue-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Blue:~$


Column | Details
------------ | -------------
Name | Blue
IP | 10.10.10.40
Points | 20
Os | Windows
Difficult | Easy
Creator | [ch4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 28th June 2017 

# Summary:~$

* Discovering the new host and scanning for open ports.
* While scanning found a `RCE` Vulnerability on SMB.
* Using `ms17_010_eternalblue` module from `Metasploit` to get root directly.

# Starting:~$

## Nmap

Using `Nmap` to scan the host.

**Command**: *nmap -sV -T4 -Pn --script vuln 10.10.10.40*

____
![](/assets/img/blue-hackthebox/nmap-scan-1.png)

It shows port 445 i.e. `smb` is vulnerable to remote code execution with `smb-vuln-ms17-010`.

Let's use `Metasploit` for this exploit.

____
![](/assets/img/blue-hackthebox/metasploit-exploit-2.png)

Following are the options I used to exploit the machine:

___
![](/assets/img/blue-hackthebox/show-options-3.png)

Got `Root`.

___
![](/assets/img/blue-hackthebox/got-root-3.png)


