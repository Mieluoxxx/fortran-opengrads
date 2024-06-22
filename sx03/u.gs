'reinit'
*打开uwnd.mon.mean.nc数据
'sdfopen uwnd.mon.mean.nc'
*设置经度为东经120度
'set lon 120'
*设置纬度范围为赤道0度至北纬90度
'set lat 0 90'
*设置等压面从1000hPa至100hPa
'set lev 1000 100'
*设置时间为2023年7月
'set time jul2023'
*设置Z方向取对数尺度
'set zlog on'
*设置出图类型为等值线contour
'set gxout contour'
*显示纬向风
'd uwnd'
*写标题
'draw title 2023 jul'
*存图为u.png，白色背景
'printim u.png white'
'reinit'