!makensis "nsiScript.nsi"
!system "GetVersion.exe"
!include "Version.txt"
; optional cleanup
!delfile "GetVersion.exe"
!delfile "Version.txt"