var i = 1
var isClickedMore = false
var isOpenMenu = false
var Squad = [
    {
        img:'VanDeBeek',
        name:'Van der Beek',
        info:'In international football, Van de Beek has represented the Netherlands at youth level. In November 2017, he made his senior international debut against Romania. In 2019, he was part of the squad that reached the first ever UEFA Nations League Final, but lost to Portugal.'
    },
    {
        img:'Maguire',
        name:'Harry Maguire',
        info:'Maguire came through the youth system at Sheffield United before graduating to the first team in 2011. He totalled 166 professional games for the club and was their Player of the Year three consecutive times, also featuring in the PFA Team of the Year for League One as many times. In 2014, he transferred to Hull City for £2.5 million, who loaned him to Wigan Athletic in 2015.'
    },
    {
        img:'Varane',
        name:'Raphaël Varane',
        info:'Varane represented France at under-18, under-20 and under-21 level before making his full international debut in March 2013. He was part of Frances FIFA World Cup squad in 2014, when he was nominated for the Best Young Player award, and in 2018, when he played every minute of every game as France went on to win the title.'
    },
    {
        img:'Shaw',
        name:'Luke Shaw',
        info:'On 5 March 2014, he made his senior international debut for the England team in a 1–0 friendly win against Denmark, and later that year was selected in the squad for the FIFA World Cup. He scored his first international goal in the UEFA Euro 2020 Final, which was also the fastest ever scored in a UEFA European Championship final and fifth fastest in the tournament’s history'
    },
    {
        img:'Wanbi',
        name:'Aaron Wan-Bissaka',
        info:'Wan-Bissaka began his career with Crystal Palace and was named as the clubs Player of the Year for the 2018–19 season. In 2019, he moved to Manchester United for an initial fee of £45 million, with another £5 million due in potential bonuses.'
    },
    {
        img:'DeGea',
        name:'David de Gea',
        info:'Tipped by many as the successor to Iker Casillas as Spains long-term goalkeeper, De Gea was the captain for the Spain under-21 national team that won the European Championship in 2011 and 2013, and also competed in the 2012 Summer Olympics. He made his debut for the senior team in 2014 and was selected for that years World Cup.'
    },
    {
        img:'Dean',
        name:'Dean Henderson',
        info:'Henderson signed his first professional contract with Manchester United in 2015 and extended it in 2018 for a further two years until 2022. He made his debut for Manchester United against Luton Town in the third round of the EFL Cup in 2020. He has also been loaned out to a number of other teams.'
    },
    {
        img:'Martial',
        name:'Anthony Martial',
        info:'Playing youth football for Les Ulis, Martial began his professional career at Lyon, then transferred to AS Monaco in 2013 for a fee of €6 million. He was a member of Monacos squad for two seasons, and signed for Manchester United in 2015 for an initial fee of £36 million which could potentially rise to £57.6 million'
    },
    {
        img:'James',
        name:'Daniel Jame',
        info:'Daniel Owen James (born 10 November 1997) is a professional footballer who plays as a winger for Premier League club Manchester United and the Wales national team. James made his professional debut for Swansea City in February 2018, and signed for Manchester United in June 2019. He made his senior Wales debut in November 2018, having previously represented the nation at various youth levels, and was part of the squad at UEFA Euro 2020.'
    },
    {
        img:'Fred',
        name:'Fred',
        info:'Fred started his career at Brazilian club Internacional, where he won 2 Campeonato Gaúcho titles. In June 2013, he transferred to Shakhtar Donetsk. After 5 seasons playing in Donetsk, he and the team won 3 Ukrainian Premier League titles. In 2018, Fred signed for Manchester United.'
    },
    {
        img:'Lingard',
        name:'Jesse Lingard',
        info:'He represented England at under-17 and under-21 levels, before making his senior international debut in October 2016 and went to represent his country at the 2018 FIFA World Cup, a tournament where England reached the semi finals, finishing fourth.'
    },
]

var Tour = [
    {
        time: '14/08 - 18:30',
        away_logo: 'img/Tour/away1.png',
        away_name: 'Leeds United'
    },
    {
        time: '22/08 - 20:00',
        away_logo: 'img/Tour/away2.png',
        away_name: 'Southampton'
    },
    {
        time: '29/08 - 22:30',
        away_logo: 'img/Tour/away3.png',
        away_name: 'Wolves'
    },
    {
        time: '11/09 - 21:00',
        away_logo: 'img/Tour/away4.png',
        away_name: 'Newcastle'
    },
    {
        time: '19/09 - 20:00',
        away_logo: 'img/Tour/away5.png',
        away_name: 'West Ham'
    },
    {
        time: '25/09 - 21:00',
        away_logo: 'img/Tour/away7.png',
        away_name: 'Aston Villa'
    },
    {
        time: '02/10 - 21:00',
        away_logo: 'img/Tour/away8.png',
        away_name: 'Everton'
    },
    {
        time: '16/10 - 21:00',
        away_logo: 'img/Tour/away9.png',
        away_name: 'Leicester'
    },
    {
        time: '23/10 - 21:00',
        away_logo: 'img/Tour/away10.png',
        away_name: 'Liverpool'
    },
    {
        time: '30/10 - 21:00',
        away_logo: 'img/Tour/away6.png',
        away_name: 'Tottenham'
    },
]

//hearder
document.querySelector('.nav-menu').onclick = function(){
    if(isOpenMenu){
        isOpenMenu = false
    }
    else{
        isOpenMenu = true
    }

    if(isOpenMenu == true){
        document.querySelector('#nav-main').innerHTML = `<li><a href="#news">News</a></li>
        <li><a href="#member">Member</a></li>
        <li><a href="#tour">Tour</a></li>
        <li><a href="#transfer">Transfer</a></li>
        <li class="last-child"><a href="#" style="border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;">Other<i class="nav-arrow-down ti-angle-down"></i></a>
            <ul class="sub-nav">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Fans</a></li>
                <li><a href="#" style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">Moment</a></li>
            </ul>
        </li>`
        document.querySelector('.nav-menu').innerHTML = '<i class="ti-close"></i>'
    }
    else{
        document.querySelector('#nav-main').innerHTML = ''
        document.querySelector('.nav-menu').innerHTML = '<i class="ti-align-justify"></i>'
    }
}

//slider

setInterval(function(){
    document.querySelector('#slider').style.backgroundImage = `url('img/Slider/slider_${i}.jpg')`
    i++
    if(i == 2){
        document.querySelector('.text-hearder').innerHTML = 'Old Trafford'
        document.querySelector('.text-description').innerHTML = 'Manchester City - United Kingdom'
    }
    else if(i == 3){
        document.querySelector('.text-hearder').innerHTML = 'Manchester United'
        document.querySelector('.text-description').innerHTML = 'Squad 2013/2014'
    }
    else{
        document.querySelector('.text-hearder').innerHTML = 'Manchester United'
        document.querySelector('.text-description').innerHTML = 'Champion League Final 2008'
    }
    if(i == 4) {i = 1}
}, 10000)

//Member
const data = document.querySelector('.squad').innerHTML
document.querySelector('.more-player').onclick = function(){
    if(isClickedMore){
        isClickedMore = false
    }
    else{
        isClickedMore = true
    }
    var squad = document.querySelector('.squad')
    var htmls = ''
    Squad.forEach(function(player){
        htmls += `
        <div class="squad-member">
            <img src="img/Member/${player.img}.jpg" alt="" class="member-image">
            <div class="member-description">
                <h7 class="member-name">${player.name}</h7>
                <p class="member-info">${player.info}</p>
            </div>
        </div>
        `
    })
    
    if(isClickedMore == true){
        squad.innerHTML += htmls
        document.querySelector('.more-player').innerHTML = '<i class="nav-arrow-down ti-angle-up">'
    }
    else{
        squad.innerHTML = data
        document.querySelector('.more-player').innerHTML = '<i class="nav-arrow-down ti-angle-down">'
    }
}

//tour

var tour_htmls = ''
Tour.forEach(function(Tour_match){
    tour_htmls += `
    <div id="tour-match">
        <div class="home">
            <img src="img/Tour/home.png" alt="">
            <p class="home-name">Manchester United</p>
        </div>
        <h2 class="time">${Tour_match.time}</h2>
        <div class="away">
            <img src="${Tour_match.away_logo}" alt="">
            <p class="home-name">${Tour_match.away_name}</p>
        </div>
    </div>`
}) 
document.querySelector('.tour-list').innerHTML = tour_htmls

