function makeModal() {
    var modalDivTop = document.createElement('div');
    modalDivTop.setAttribute('class', 'modal fade');
    modalDivTop.setAttribute('id', 'exampleModalScrollable');
    modalDivTop.setAttribute('tabindex', '-1');
    modalDivTop.setAttribute('role', 'dialog');
    modalDivTop.setAttribute('aria-labelledby', 'exampleModalScrollableTitle');
    modalDivTop.setAttribute('aria-hidden', 'true');
    var modalDivRoleDocument = document.createElement('div');
    modalDivRoleDocument.setAttribute('class', 'modal-dialog modal-dialog-scrollable');
    modalDivRoleDocument.setAttribute('role', 'document');
    var modalDivContent = document.createElement('div');
    modalDivContent.setAttribute('class', 'modal-content');
    var modalDivHeader = document.createElement('div');
    modalDivHeader.setAttribute('class', 'modal-header');
    var modalh5 = document.createElement('h5');
    modalh5.setAttribute('class', 'modal-title');
    modalh5.setAttribute('id', 'exampleModalScrollableTitle');
    var modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'modal-body');
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'close');
    button.setAttribute('data-dismiss', 'modal');
    button.setAttribute('aria-label', 'Close');
    modalDivHeader.appendChild(button);
    var buttonSpan = document.createElement('span');
    buttonSpan.setAttribute('aria-hidden', 'true');
    var buttonText = 'X';
    buttonSpan.append(buttonText);
    button.appendChild(buttonSpan);
    var modal = document.getElementById('modal');
    modal.appendChild(modalDivTop);
    modalDivTop.appendChild(modalDivRoleDocument);
    modalDivRoleDocument.appendChild(modalDivContent);
    modalDivContent.appendChild(modalDivHeader);
    modalDivContent.appendChild(modalBody);
    modalDivHeader.appendChild(modalh5);

    for (i = 0; i<)
}