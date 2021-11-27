const disableScroll = () => {
    document.addEventListener('wheel', function (event) {
        if (document.activeElement.type === 'number') {
            document.activeElement.blur();
        }
    });
};
export default disableScroll;
