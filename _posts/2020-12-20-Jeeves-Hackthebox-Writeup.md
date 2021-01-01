---
title: Jeeves Hackthebox Writeup
date: 2020-12-20 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [windows,systeminfo,meterpreter,metasploit,rotten potatoes,web delivery moduel,jenkins, dirbuster]     # TAG names should always be lowercase
image: /assets/img/jeeves-hackthebox/jeeves-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Jeeves:~$


Column | Details
------------ | -------------
Name | Jeeves
IP | 10.10.10.63
Points | 30
Os | Windows
Difficult | Medium
Creator | [mrb3n](https://www.hackthebox.eu/profile/2984)
Out on | 11th November 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Using `gobuster` to find out the hidden directories on port 50000 which is `/askjeeves`
* Got `User Shell` using the script console in `Jenkins dashboard`.
* Escalated `Privileges` using exploit suggester on metasploit, which gave us `ms16_075_reflection_juicy` as one of the recommendations.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/jeeves-hackthebox/nmap-automator-scan-1.png)

Basically `4 ports` are open i.e. `80,135,445,50000`. Let's access port 80 first.

**Port 80**:
___
![](/assets/img/jeeves-hackthebox/port-80-2.png)

I search `test` just to check what is happening on the website and was thrown with the below error

___
![](/assets/img/jeeves-hackthebox/error-3.png)

I realised that it is a fixed image and the `response` won't change on entering any different value in the search bar.

Used dirbuster for `directory search` using *directory-list-lowercase-2.3-medium.txt* as the wordlist, it's arleady located at */usr/share/wordlists/dirbuster* in Kali Linux. But nothing worked in this case.

Then I checked `Port 50000`.

___
![](/assets/img/jeeves-hackthebox/port-50000-4.png)

Used dirbuster for `directory search` using *directory-list-lowercase-2.3-medium.txt* as the wordlist, it's arleady located at */usr/share/wordlists/dirbuster* in Kali Linux. It showed us a new directory named `/askjeeves`

___
![](/assets/img/jeeves-hackthebox/got-askjeeves-port-50000-5.png)

Accessing `http://10.10.10.63:50000/askjeeves`. We got a `Jenkins` dashboard.

___
![](/assets/img/jeeves-hackthebox/jenkins-dashboard-6.png)

We got to know that `Jenkins version 2.87` is running. Looking for some vulnerabilities I found that `Jenkins Groovy Script` can be exploited in multilple ways.

[Blog on Jenkins Groovy Script Exploitation](https://www.hackingarticles.in/exploiting-jenkins-groovy-script-console-in-multiple-ways/)

___
![](/assets/img/jeeves-hackthebox/payload-groovy-script-8.png)

For **Payload**, [check this out.](https://gist.github.com/frohoff/fed1ffaab9b9beeb1c76)

Changing it with our IP and listening on `nc`, we got a `User Shell`.

___
![](/assets/img/jeeves-hackthebox/got-shell-9.png)

Let's gather `systeminfo` for Privilege Escalation.

___
![](/assets/img/jeeves-hackthebox/gathering-system-info-10.png)

Feeding the above information to `windows exploit suggester` which I had downloaded on my machine.

Download link : [windows-exploit-suggester](https://github.com/AonCyberLabs/Windows-Exploit-Suggester)

___
![](/assets/img/jeeves-hackthebox/windows-exploit-suggester-11.png)

To run this exploit, the best way was to get a `meterpreter` shell, so switching to *meterpreter shell* from *nc*, using `multi/script/web_delivery` module.

___
![](/assets/img/jeeves-hackthebox/web-delivery-meterpreter-13.png)

Now sending the `payload` to machine via `nc shell` that we have.

___
![](/assets/img/jeeves-hackthebox/meterpreter-shell-14.png)

We got a `meterpreter session`.

Now running `Exploit suggester ` using **post/multi/recon/local_exploit_suggester** module.

___
![](/assets/img/jeeves-hackthebox/running-local-exploit-suugester-15.png)

This is same as the one we had found on `Local Winows Exploit Suggester`, i.e. **ms16_075_reflection_juicy**. Trying to escalate our pirivileges using this.

___
![](/assets/img/jeeves-hackthebox/priv-esc-image-latest-17.png)

Got `Root`.

___
![](/assets/img/jeeves-hackthebox/exploiting-18.png)

