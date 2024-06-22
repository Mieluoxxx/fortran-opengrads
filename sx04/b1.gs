'reinit'
*打开nc数据
'sdfopen pr_wtr.eatm.mon.mean.nc'

*设置写数据
'set gxout fwrite'

*设置写入数据文件的路径和文件名
'set fwrite pre7.grd'

*设置经度范围（格点形式更好）
'set lon 0 360 2.5'

*设置纬度范围（格点形式更好）
'set lat -90 90 2.5'

*设置垂直层次
'set z 1'

*写循环结构进行时次设置
*以年份作为循环变量最方便，也可以用时次
iyear=1951


*循环语句开始语句，设定循环进行的条件
while(iyear<=2010)

*若以年份作为循环时设置时间为某年7月；
*若以时次作为循环，设置时间为某年7月所在时次
'set time Jul'iyear''
    
*显示变量
'd pr_wtr'

*设定循环变量累加，如以年份作为循环，累加加1
*如以时次作为循环，累加12
iyear = iyear + 1

*循环结束语句
endwhile

*结束写数据
'disable fwrite'
'reinit'