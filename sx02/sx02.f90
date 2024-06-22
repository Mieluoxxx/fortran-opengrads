program convert_to_binary
implicit none

integer i, j, it
integer, parameter::nx=37,ny=17,nt=48
real u200(nx,ny,nt),v200(nx,ny,nt),u850(nx,ny,nt),v850(nx,ny,nt)

  open(1, file='u200.dat')
  open(2, file='v200.dat')
  open(3, file='u850.dat')
  open(4, file='v850.dat')

  do it=1,nt
    read(1,*)((u200(i,j,it),i=1,nx),j=1,ny)
    read(2,*)((v200(i,j,it),i=1,nx),j=1,ny)
    read(3,*)((u850(i,j,it),i=1,nx),j=1,ny)
    read(4,*)((v850(i,j,it),i=1,nx),j=1,ny)
  enddo
  close(1);close(2);close(3);close(4)
  
  open(12, file='uv.grd', form='unformatted', access='stream')
  do it=1,nt
    write(12) ((u850(i,j,it),i=1,nx),j=1,ny)
    write(12) ((u200(i,j,it),i=1,nx),j=1,ny)
    write(12) ((v850(i,j,it),i=1,nx),j=1,ny)
    write(12) ((v200(i,j,it),i=1,nx),j=1,ny)
  enddo
  close(12)

end
  
