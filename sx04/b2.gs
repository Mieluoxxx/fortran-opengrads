'reinit'
*打开7月降水数据
'sdfopen pr_wtr.eatm.mon.mean.nc'
*设置经度范围
'set lon 0 360 2.5'
*设置纬度范围
'set lat -90 90 2.5'
*设置层次
'set z 1'
*设置时次
'set t 7'
*计算60年平均值
'define uclim = ave(pr_wtr, t=37, t=756, 12)'
*'modify uclim seasonal'
*-----绘图----------
'set grid off'
'set grads off'
*设置绘图的经度范围
'set lon 70 140'
*设置绘图的纬度范围
'set lat 15 55'
*设置时次
'set t 7'
*显示60年平均值
'd uclim'
*用q w2xy命令将经纬度坐标转化纬画布坐标
'q w2xy 117.5 32.5'
*提取画布坐标赋值给x1和y1
x1=subwrd(result,3)
y1=subwrd(result,6)
*设置字符串颜色、位置等属性
'set string 2 c 8 0'
*设置字符串大小
'set strsiz 0.2'
*绘制字符串W
'draw string 'x1' 'y1' W'
*存图
'printim preclim.png white'
'reinit'