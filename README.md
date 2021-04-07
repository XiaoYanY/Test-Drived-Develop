## 初探 TDD编程

### 问题描述
假设你负责软件开发，现在你需要给一架小车编写控制程序，根据指挥中心发送的控制指令来控制小汽车的行动

小汽车收到的指令分为四类：

  1.探索区域信息：告知小汽车，正片区域的长度 (X) 和 (Y) 有多大；

  2.初始化信息：小汽车的降落地点 (x,y) 和朝向 (N,S,E,W) 信息；

  3.移动指令：小汽车前进 (F) 或后退 (B)；

  4.转向指令：小汽车可以左转90度 (L) 或右转90度 (R) ，由于控制中心和小车之间的距离很远，所以需要控制中心发送指令到小车，小车接收指令并完成指令之后，再回报自己所在的位置坐标与朝向
  

  ### Tasking

  - 初始化
    - input -> position(0,0) direction("N")
    - output -> state{ position(0,0) direction("N") }
  
  - 移动
    - 向前
      - input: North  (0,0)    output: (0,1)
      - input: West   (0,0)    output: (-1,0)
      - input: East   (0,0)    output: (1,0)
      - input: South  (0,0)    output: (0,-1)
    - 后退
      - input: North  (0,0)    output: (0,-1)
      - input: West   (0,0)    output: (1,0)
      - input: East   (0,0)    output: (-1,0)
      - input: South  (0,0)    output: (0,1)
  - 转向
    - 输入为当前小车的方向
  - 左转
    - input: North output -> West
    - input: West  output -> South
    - input: East output -> North
    - input: South output -> East
  - 右转
    - input: North output -> East
    - input: West output -> North
    - input: East output -> South
    - input: South output -> West
