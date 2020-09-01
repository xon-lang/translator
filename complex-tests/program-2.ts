export function onKeydown(event: any) {
    let index;
    if (this.keyManager.activeItem && event.code == `Enter`) {
        this.keyManager.activeItem.item.click()
        this.keyManager.setActiveItem(-1)
    }
    index = 0
    if (event.code == `ArrowLeft`) {
        if (currentGroupIndex && this.keyManager.activeItemIndex - this.groupsLengths[currentGroupIndex].previousLengthItems >= this.groupsLengths[currentGroupIndex - 1].length) {
            index = this.groupsLengths[currentGroupIndex].previousLengthItems - 1
        } else if (currentGroupIndex) {
            index = this.keyManager.activeItemIndex - this.groupsLengths[currentGroupIndex - 1].length
        } else {
            index = 0
        }
    }
}