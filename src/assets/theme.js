/*********** Module Spacer ***********/
.module-spacer--extra-extra-small {
    height: 12px
}
.module-spacer--extra-small {
    height: 12px
}
.module-spacer--small {
    height: 20px
}
.module-spacer--medium {
    height: 32px
}

/*********** Section ***********/
.c-main {
    padding: 96px 0
}
.c-section-wrapin {
    margin: 0 auto;
    max-width: 575px;
    position: relative;
    padding: 0 1rem;
    text-align: center;
    width: 100%;
}

.c-section-container {
    margin: 0 auto;
    max-width: 400px;
    padding: 1rem;
    height: auto;
    width: calc(100% - 2rem);
}

.c-section__loading {
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-flow: column;
    justify-content: center;
    opacity: 0.9;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999;
}

.c-section__loading > p {
    color: #444;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
}

.center {
    margin: 0 auto;
    text-align: center;
}

.p-grid__column {
    align-items: center;
    display: flex;
    flex-flow: column;
}

.p-grid__row {
    display: flex;
    flex-flow: row wrap;
}

.p-grid__list-images {
    display: flex;
    flex-flow: wrap;
}

.p-grid__list-images > .p-media__thumb {
    margin: .5rem;
    width: calc(50% - 1rem);
}

.p-media__thumb {
    position: relative;
    overflow: hidden;
    width: 100%
}

.p-media__thumb::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-media__thumb > img {
    position: absolute;
    object-fit: cover;
    object-position: center;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
}

/*********** Footer ***********/
.l-footer {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    margin: 0 1rem;
}

.l-footer > a {
    color: #444;
    font-size: .9rem;
    margin-right: 1rem;
}

.u-text-small {
    font-size: .9rem;
}

.u-text__link-none {
    text-decoration: none;
}

.u-text-left {
    text-align: left;
}

.u-text-right {
    text-align: right;
}

.u-text-center {
    text-align: center;
}

.u-text__headline {
    color: #4dd0e1;
    font-size: 1.563rem;
    margin: 0 auto 1rem auto;
}

.u-display-none {
    display: none;
}

@media screen and (min-width: 576px) {
    /*********** Module Spacer ***********/
    .module-spacer--extra-extra-small {
        height: 16px
    }
    .module-spacer--extra-small {
        height: 20px
    }
    .module-spacer--small {
        height: 32px
    }

    /*********** Section ***********/
    .c-section-wrapin {
        max-width: 1024px;
    }
}

@media screen and (min-width:1024px) {
    /*********** Module Spacer ***********/
    .module-spacer--medium {
        height: 48px
    }
}