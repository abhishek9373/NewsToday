import React from 'react';


function Footer() {
    return <div>
        <footer className="bg-info text-center text-white" >
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <h2>Our Founder</h2>
            <img src="https://scontent.fnag6-1.fna.fbcdn.net/v/t39.30808-1/p240x240/272694371_999720747593862_5312299756466317082_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=HM14Dc5oddwAX_dmL1B&_nc_ht=scontent.fnag6-1.fna&oh=00_AT_vteFBQ0e0ZoS0FhRGzqHK1ZpR5mqK6FTNtJ9O-fQZMg&oe=61FA9617" style={{borderRadius:"50%",height:"120px",width:"120px", border:"3px solid white"}} className=" mx-auto d-block" alt=""/>
                <br /> © 2020 Copyright :
                <a className="text-white" href="https://www.facebook.com/abhishek.gund.524" style={{textDecoration:"none"}}> abhishekgund500@gmail.com</a><br /><br />
                NewsToday is optimized for News, Knowledge, and learning. Examples might be simplified to improve reading and basic GK. Images, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy.
Copyright 2021-2022 by Refsnes Data. All Rights Reserved.
            </div>
        </footer>
    </div>;
}

export default Footer;
