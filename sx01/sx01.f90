program mh
implicit none
integer, parameter::ny=60

real p(ny), s(ny), lon(ny), lat(ny) ! original array
real pa(ny), sa(ny), lona(ny), lata(ny) ! anomaly
real pav, sav, lonav, latav ! mean
real pd, sd, lond, latd ! variance
integer i, j, k

  open(1, file='p.dat')
  open(2, file='s.dat')
  open(3, file='lon.dat')
  open(4, file='lat.dat')

  do i=1, ny
    read(1,*) p(i)
    read(2,*) s(i)
    read(3,*) lon(i)
    read(4,*) lat(i)
  enddo

  close(1);close(2);close(3);close(4)

  call cha(ny, p, pa, pav, pd)
  call cha(ny, s, sa, sav, sd)
  call cha(ny, lon, lona, lonav, lond)
  call cha(ny, lat, lata, latav, latd)

  ! write climatological value and standard deviation
  ! of the Mongolian high pressure circulation index
  ! into mh1.dat
  open(5, file='mh1.dat')
    write(5,*) pav, pd
    write(5,*) sav, sd
    write(5,*) lonav, lond
    write(5,*) latav, latd
  close(5)

  ! write climatological value and standard deviation
  ! of the Mongolian high pressure circulation index
  ! into mh1.grd
  open(6, file='mh1.grd', form='unformatted', access='stream')
    write(6) pav, pd
    write(6) sav, sd
    write(6) lonav, lond
    write(6) latav, latd
  close(6)

  open(7, file='mh2.dat')
    write(7,*) (pa(i),i=1,ny)
    write(7,*) (sa(i),i=1,ny)
    write(7,*) (lona(i),i=1,ny)
    write(7,*) (lata(i),i=1,ny)
  close(7)

  open(8, file='mh2.grd', form='unformatted', access='stream')
    do i=1,ny
      write(8) pa(i)
      write(8) sa(i)
      write(8) lona(i)
      write(8) lata(i)
    enddo
  close(8)

end


subroutine cha(ny,x,xa,xav,xd)
implicit none
integer i,ny

real x(ny), xa(ny), xav, xd, sum

  sum=0.0
  do i=1,ny
    sum=sum+x(i)
  enddo

  ! average
  xav=sum/ny

  ! xa & xd
  xd=0.0
  do i=1, ny
    xa(i)=x(i)-xav
    xd=xa(i)*xa(i)+xd
  enddo

  xd=sqrt(xd/ny)
  return 

end

