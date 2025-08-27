
document.addEventListener('DOMContentLoaded', function() {


//图片集设计
const pictures = document.querySelector('.pictures');
const pictureCount = document.querySelectorAll('.picture').length;
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const indicators = document.querySelectorAll('.indicator');

let currentPic = 0;

function GoToPic(picIndex){
    if(picIndex < 0) picIndex = pictureCount - 1;
    if(picIndex >= pictureCount) picIndex = 0;
    pictures.style.transform = `translateX(-${picIndex * 100}%)`;
    currentPic = picIndex;
    updateIndecators();
}

function updateIndecators(){
    indicators.forEach((indicator , index) => {
        indicator.classList.toggle('active', index === currentPic);
    });
}

leftBtn.addEventListener('click', () => GoToPic(currentPic - 1));//上一张
rightBtn.addEventListener('click', () => GoToPic(currentPic + 1));//下一张

indicators.forEach(indicator => {
    indicator.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        GoToPic(index);
    });
});

setInterval(() => GoToPic(currentPic + 1), 5000);//自动轮播
//
//变化窗口设计
var btns = document.getElementsByClassName("mbtn");
const content = document.querySelectorAll('.content');
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",
        function(){
            // 移除所有内容的active类
            content.forEach(content => content.classList.remove('active'));
            
            // 获取目标内容ID
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const targetWindow  = document.getElementById('Wcontainer');
            
            // 调试信息
            console.log("点击按钮，目标ID:", targetId);
            console.log("目标内容元素:", targetContent);
            
            if(targetContent){
                // 激活目标内容
                targetContent.classList.add('active');
                console.log("内容已激活");
            } else {
                console.log("未找到目标内容");
            }
            
            // 显示弹窗
            targetWindow.classList.add('show');
            console.log("弹窗已显示");
        }
    )
}
// 
//窗口关闭按钮设计
const closeBtn = document.getElementById('closePopUp');
const overlay = document.getElementById('Wcontainer');

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('show');
});
overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
        overlay.classList.remove('show');
    }
});
//

});