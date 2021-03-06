const EndScreen = (function() {
    'use strict';

    const _el = document.getElementById('end-screen');
    const [_mainMenuButton] = _el.getElementsByClassName('button');

    function addOnMainMenuClick(onClick) {
      _mainMenuButton.addEventListener('click', onClick);
    }

    function _drawWinner() {
        const [playerDivEl] = _el.getElementsByClassName('player-image');
        const currentPlayerTurn = GameState.getCurrentPlayerTurn();
        playerDivEl.appendChild(PlayScreen.getPlayerResourceDomElementForGameMode(currentPlayerTurn));
    }

    function show() {
      _el.classList.remove('hide');
      _drawWinner();
  	}

    function hide() {
      _el.classList.add('hide');
  	}

    return {
        show: show,
        hide: hide,
        addOnMainMenuClick,
    };
}());
