integer,parameter::nt=60,in=144,jn=73,nm=12
real slp(in,jn,nt),yh(nm,nt),rr(in,jn)

  open(40,file='pre7.grd', form='unformatted', access='stream')
    do it=1,nt
      do iy=1,jn
        read(40)(slp(ix,iy,it),ix=1,in)
      enddo
    enddo
  close(40)


  open(2,file='nino34.txt')
    do it=1,nt
      read(2,*)iyear,(yh(k,it),k=1,nm)
      write(*,*)yh(1,it)
    enddo
  close(2)


  do iy=1,jn
    do ix=1,in
      call correlation(nt,slp(ix,iy,:),yh(7,:) ,r)
      rr(ix,iy)=r
    enddo
  enddo


  open(3,file='corr.txt')
    do iy=1,jn
      do ix=1,in
        write(3,*)rr(ix,iy)
      enddo
    enddo
  close(3)


  open(4,file='corr.grd',form='unformatted', access='stream')
    do iy=1,jn
      do ix=1,in
        write(4)rr(ix,iy)
      enddo
    enddo

  close(4)

end


subroutine correlation(n,x,y,r)
  real x(n),y(n)
  ave1=0.0; ave2=0.0; Var1=0.0; Var2=0.0
  do i=1,n
    ave1=ave1+x(i)/real(n)
    ave2=ave2+y(i)/real(n)
  enddo

  do i=1,n
    Var1=Var1+(x(i)-ave1)**2
    Var2=Var2+(y(i)-ave2)**2
  enddo

  tmp=0.0
  do i=1,n
    tmp=tmp+(x(i)-ave1)*(y(i)-ave2)
  enddo

  r=tmp/sqrt(Var1*Var2)

end


