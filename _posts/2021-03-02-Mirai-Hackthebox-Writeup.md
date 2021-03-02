---
title: Mirai Hackthebox Writeup
date: 2021-03-02 06:00:00 +0530
categories: [Hackthebox, Retired]
tags: [linux,raspberrypi,pi hole,default credentials]     # TAG names should always be lowercase
image: /assets/img/mirai-hackthebox/mirai-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Mirai:~$


Column | Details
------------ | -------------
Name | Mirai
IP | 10.10.10.48
Points | 20
Os | Linux
Difficult | Easy
Creator | [Arrexel](https://www.hackthebox.eu/profile/2904)
Out on | 1st September 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Found `/admin` pannel on port 80 i.ee *pi-hole*.
* Found default ssh credentials as `pi:raspberry`.
* Got `Root` as all permissions are permitted.

# Starting:~$

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Download link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

**Nmap Full Port Scan**: *nmap -sV -p- -T4 -Pn 10.10.10.48*

___
![](/assets/img/mirai-hackthebox/nmap-full-scan-1.png)

___
![](/assets/img/mirai-hackthebox/nmap-automator-1.png)

Checking `Port 80`.

___
![](/assets/img/mirai-hackthebox/port-80-2.png)

As the website is not loading, I randomly checked `/admin` and found pi-hole dashboard.

___
![](/assets/img/mirai-hackthebox/port-80-admin-3.png)

I checked `Port 32400` and found a `plex` login page.

___
![](/assets/img/mirai-hackthebox/port-32400-plex-4.png)

I tried signing up to plex but it didn't work.

___
![](/assets/img/mirai-hackthebox/signup-plex-5.png)

After that I checked for `pi-hole` default credentials and found [this](https://www.reddit.com/r/pihole/comments/6eqyw4/pihole_ssh_login/)

___
![](/assets/img/mirai-hackthebox/found-ssh-creds-6.png)

Logging into `ssh` using these credentials i.e. `pi`:`raspberry`.

___
![](/assets/img/mirai-hackthebox/ssh-login-7.png)

For `Privilege Escalation`, I used *sudo -l* command.

___
![](/assets/img/mirai-hackthebox/priv-esc-8.png)

All the commands can be run as `Root`.

Got Root.

___
![](/assets/img/mirai-hackthebox/root-9.png)

We couldn't find the `root.txt` flag.

___
![](/assets/img/mirai-hackthebox/finding-root-flag-10.png)

Let's check the USB drive.

___
![](/assets/img/mirai-hackthebox/deleted-files-11.png)

Now I googled a bit and found that `/dev/sdb` folder is external storage for raspverry pi.

___
![](/assets/img/mirai-hackthebox/sdb-files-for-raspberry-pi-12.png)

Used `cat` command but it showed unreadable content so I used `strings` command.

___
![](/assets/img/mirai-hackthebox/strings-sbd-13.png)

Got the `Root flag`.