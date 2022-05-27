import React from "react";
import { GraphicsDesignIcon, BusinessIcon, WritingTranslationIcon, VideoAnimationIcon, ProgrammingIcon, OnlineMarketingIcon, LifeStyleIcon, MusicAudioIcon, DataIcon } from '../services/svg.service.js'

export const IconCategoriesHomepage = () => {

    return (
        <div class="main-categories max-width-container">
            <h2>Explore the marketplace</h2>
            <ul class="categories-list">
                <li>
                    <a href="/categories/graphics-design">
                    <GraphicsDesignIcon />
                       Graphics &amp; Design</a>
                </li>
                <li>
                    <a href="/categories/online-marketing">
                        <OnlineMarketingIcon />Digital Marketing</a>
                </li>
                <li>
                    <a href="/categories/writing-translation">
                        <WritingTranslationIcon/>Writing &amp; Translation</a>
                </li>
                <li>
                    <a href="/categories/video-animation">
                        <VideoAnimationIcon />Video &amp; Animation</a>
                </li>
                <li>
                    <a href="/categories/music-audio">
                        <MusicAudioIcon />Music &amp; Audio</a>
                </li>
                <li>
                    <a href="/categories/programming-tech">
                        <ProgrammingIcon />Programming &amp; Tech</a>
                </li>
                <li>
                    <a href="/categories/business">
                        <BusinessIcon/>Business</a>
                </li>
                <li>
                    <a href="/categories/lifestyle">
                        <LifeStyleIcon />Lifestyle</a>
                </li>
                <li>
                    <a href="/categories/data">
                        <DataIcon/>Data</a>
                </li>
            </ul>
        </div>
    )
}