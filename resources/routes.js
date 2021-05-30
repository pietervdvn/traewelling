import Vue from "vue";
import VueRouter from "vue-router";
import ActiveStatuses from "./views/ActiveStatuses";
import SingleStatus from "./views/SingleStatus";
import Profile from "./views/Profile";
import Event from "./views/Event";
import Leaderboard from "./views/Leaderboard";
import LeaderboardMonth from "./views/LeaderboardMonth";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes:
        [
            {
                path: "/",
                redirect: { name: "statuses.active" }
            },
            {
                path: "/statuses/active",
                component: ActiveStatuses,
                name: "statuses.active"
            },
            {
                path: "/status/:id",
                component: SingleStatus,
                props: true,
                name: "singleStatus"
            },
            {
                path: "/profile/:username",
                component: Profile,
                name: "profile"
            },
            {
                path: "/event/:slug",
                component: Event,
                name: "event"
            },
            {
                path: "/leaderboard/",
                component: Leaderboard,
                name: "leaderboard"
            },
            {
                path: "/leaderboard/:month",
                component: LeaderboardMonth,
                name: "leaderboard.month"
            }

        ],
    base: "/",
});