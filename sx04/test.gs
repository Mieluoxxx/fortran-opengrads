'reinit'
'open pre7.ctl'
'set lon 0 360'
'set lat -90 90'
'set z 1'
'set t 1'
*计算60年平均值
'define preclim=ave(pre,t=1,t=60,1)'
*设置距平的时次范围
'set t 1 60'
*计算距平
'define anom=pre-preclim'
*----------绘图-----------------
*调用颜色定义子程序
'define_colors'
'set grads off'
'set grid off'
*设置距平图经纬度范围
'set lon 0 360'
'set lat -90 90'
*设置层次
'set z 1'
*设置时次
'set time Jul1998'
*设置出图类型为填色图
'set gxout shaded'
*设置绘制大于0的等值线
'set cmin 0'
*设置等值线间隔为2
'set cint 2'
*大家可以将下两行*去掉试试自定义颜色绘制特殊等值线
*'set clevs 0 2 4 6 8 10 12 14'
*'set ccols 0 41 42 43 44 45 46 47 48'
*显示距平
'd anom'
*绘制色标
'cbarn 1 0 '
*设置出图类型为等值线图
'set gxout contour'
*设置等值线间隔为2
'set cint 2'
*显示距平
'd anom'
*写标题
'draw title Jul1998'
*存图
'printim 1998.png white'
'reinit'
; 
