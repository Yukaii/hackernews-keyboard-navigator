import { KeybindingHandler } from './utils/keybindingHandler'
import { NavigationStackManager } from './utils/navigationStackManager'
import './style.css'
import { mountHelpModal } from './HelpModal';
import { sitesNavigation } from './links';

const navManager = new NavigationStackManager();
const handler = new KeybindingHandler();

handler.registerKeybinding('j', () => {
  navManager.navigateDown();
});

handler.registerKeybinding('k', () => {
  navManager.navigateUp();
});

handler.registerKeybinding('gg', () => {
  navManager.jumpToTop();
});

handler.registerKeybinding('G', () => {
  navManager.jumpToBottom();
});

handler.registerKeybinding('o', () => {
  navManager.openLink();
});

handler.registerKeybinding('O', () => {
  navManager.openLinkInNewTab();
});

handler.registerKeybinding('u', () => {
  navManager.upvote();
});

// unvote
handler.registerKeybinding('U', () => {
  navManager.unvote();
});

// discussion
handler.registerKeybinding('d', () => {
  navManager.openDiscussion();
});

// discussion in new tab
handler.registerKeybinding('D', () => {
  navManager.openDiscussionInNewTab();
});

handler.registerKeybinding('Escape', () => {
  navManager.unfocus();
});

for (let key in sitesNavigation) {
  handler.registerKeybinding(key, () => {
    window.location.href = sitesNavigation[key];
  });
}

// more link
handler.registerKeybinding('m', () => {
  navManager.goToMoreLink();
});

handler.registerKeybinding('r', () => {
  window.location.reload();
});

document.addEventListener('keydown', (event) => {
  handler.handleKeypress(event);
});

mountHelpModal();
