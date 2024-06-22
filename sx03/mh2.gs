'reinit'
*打开mh2.ctl文件
'open mh2.ctl'
*设置 x 维数环境
'set x 1'
*设置 y 维数环境
'set y 1'
*设置 z 维数环境
'set z 1
*设置时间维数环境
'set t 1 60'
***********绘制强度指数距平为折线图
*设置图形出图类型为line
'set gxout line'
*设置line的颜色
'set ccolor 5'
*设置line的线形
'set cstyle 1'
*设置line的粗细
'set cthick 2'
'set cmark 2'
*显示蒙古高压强度指数距平pa
'd pa'
'printim pa.png white'
'c'
***********绘制面积指数距平为折线图
*设置图形出图类型为line
'set gxout line'
*设置line的颜色
'set ccolor 7'
*设置line的线形
'set cstyle 3'
*设置line的粗细
'set cthick 5'
'set cmark 3'
*显示蒙古高压面积指数距平sa
*注意，若值较小，考虑处理方法
'set vrange -0.3 0.3'
'd sa'
*将图形保存为pasa.png，背景为白色
'printim pasa.png white'
*下面的'c'不可缺少，为什么?
'c'
***********绘制经度指数距平为直方图
*设置图形出图类型为bar
'set gxout bar'
*设置bar的绘制方向
'set barbase bottom'
*设置直方条的间隔
'set bargap 10'
*设置bar的颜色
'set ccolor 2'
*显示蒙古高压经度指数距平lona
'd lona'
*将图形保存为lona.png，背景为白色
'printim lona.png white'
'c'
***********绘制纬度指数距平为直方图
*设置图形出图类型为bar
'set gxout bar'
*设置bar的绘制方向
'set barbase bottom'
*设置直方条的间隔
'set bargap 30'
*设置bar的颜色
'set ccolor 5'
*显示蒙古高压纬度指数距平lata
'd lata'
*将图形保存为lata.png，背景为白色
'printim lata.png white'