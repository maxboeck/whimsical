import InfiniteScroll from 'infinite-scroll'

const SELECTORS = {
    container: '.js-infinitescroll-container',
    item: '.js-infinitescroll-item',
    pagination: '.js-infinitescroll-pagination',
    nextLink: '.js-infinitescroll-next',
    status: '.js-infinitescroll-status'
}

function infscroll() {
    const container = document.querySelector(SELECTORS.container)
    const nextLink = document.querySelector(SELECTORS.nextLink)

    if (container && nextLink) {
        new InfiniteScroll(container, {
            path: SELECTORS.nextLink,
            append: SELECTORS.item,
            hideNav: SELECTORS.pagination,
            status: SELECTORS.status
        })
    }
}

infscroll()
