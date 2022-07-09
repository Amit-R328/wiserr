import React from 'react'

export const SellerQuestionAnswer = () => {

    return (
        <div className="q-a">

            <header>
                <h2>Q&amp;A</h2>
            </header>

            <ul class="component-accordion col-count-2 js-component-accordion">
                <li class="lp">
                    <header>What can I sell?</header>
                    <div class="panel">Be creative! You can offer any service you wish as long as it's legal and complies with our terms. There are over 200 categories you can browse to get ideas.</div>
                </li>
                <li class="lp">
                    <header>How much money can I make?</header>
                    <div class="panel">It's totally up to you. You can work as much as you want. Many sellers work on Wiserr full time and some keep their 9-5 job while using Wiserr to make extra money.</div>
                </li>
                <li class="lp">
                    <header>How much does it cost</header>
                    <div class="panel">It's free to join Wiserr. There is no subscription required or fees to list your services. You keep 80% of each transaction.</div>
                </li>
            </ul>
            <ul class="component-accordion col-count-2 js-component-accordion">
                <li class="lp">
                    <header>How much time will I need to invest?</header>
                    <div class="panel">It's very flexible. You need to put in some time and effort in the beginning to learn the marketplace and then you can decide for yourself what amount of work you want to do.</div>
                </li>
                <li class="lp">
                    <header>How do I price my service?</header>
                    <div class="panel">With Gig Packages, you set your pricing anywhere from $5 - $995 and offer three versions of your service at three different prices.</div>
                </li>
                <li class="lp">
                    <header>How do I get paid?</header>
                    <div class="panel">Once you complete a buyer's order, the money is transferred to your account. No need to chase clients for payments and wait 60 or 90 days for a check.</div>
                </li>
            </ul>
        </div>
    )
}

