---
title: Optimum Hackthebox Writeup
date: 2021-02-11 07:00:00 +0530
categories: [Hackthebox, Retired]
tags: [windows,httpfileserver,windwos exploit suggester]     # TAG names should always be lowercase
image: /assets/img/optimum-hackthebox/optimum-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Optimum:~$


Column | Details
------------ | -------------
Name | Optimum
IP | 10.10.10.8
Points | 20
Os | Windows
Difficult | Low
Creator | [cha4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 18th March 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Getting user shell by exploiting `HttpFileServer httpd 2.3` which is vulnerable to RCE.
* Using *Windows Exploit Suggester* to get `Root`.

# Starting:~$

## Nmap

Using `Nmap` to scan the host.

**Command**: *nmap -p- -sV -T4 --script vuln 10.10.10.8*

___
![](/assets/img/optimum-hackthebox/nmap-scan-1.png)

Accessing `Port 80`  , We got this

___
![](/assets/img/optimum-hackthebox/port-80-2.png)

There is a login page too, I tried few default credentials but didn't work.

___
![](/assets/img/optimum-hackthebox/login-page-3.png)

Checking any vulnerabilities or exploits available for `HttpFileServer httpd 2.3`.

We got an exploit for this version on [exploitdb](https://www.exploit-db.com/exploits/39161).

Changing `LHOST` and `LPORT` in the script. It is also mentioned to host `nc.exe` locally on port *80*.

___
![](/assets/img/optimum-hackthebox/got-shell-4.png)

We got shell as `kostas`.

Let's gather `systeminfo` for Privilege Escalation.

___
![](/assets/img/optimum-hackthebox/systeminfo-ss-5.png)

Feeding the above information to `windows exploit suggester` which I had downloaded on my machine.

Download link : [windows-exploit-suggester](https://github.com/AonCyberLabs/Windows-Exploit-Suggester)

___
![](/assets/img/optimum-hackthebox/explooit-1.png)

___
![](/assets/img/optimum-hackthebox/exploit-2.png)

___
![](/assets/img/optimum-hackthebox/exploit-3.png)

Using `MS16-098` to escalate privileges.

[Exploitdb link](https://www.exploit-db.com/exploits/41020)

[exe file](https://github.com/offensive-security/exploitdb-bin-sploits/raw/master/bin-sploits/41020.exe)

___
![](/assets/img/optimum-hackthebox/priv-esc-6.png)

Downloading the exploit on *vulnerable machine* using `powershell`.

___
![](/assets/img/optimum-hackthebox/downloading-exploit-privsec-7.png)

**Hosting Command**: *sudo python3 -m http.server 80*

After running the `exploit`, we got `Root`.

___
![](/assets/img/optimum-hackthebox/got-root-9.png)

