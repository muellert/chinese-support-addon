# -*- coding: utf-8 ; mode: python -*-
# © 2012: Roland Sieker <ospalh@gmail.com>
# © 2012: Thomas Tempé <thomas.tempe@alysse.org>
#
# License: GNU AGPL, version 3 or later; http://www.gnu.org/copyleft/agpl.html

#from pinyin import Pinyinizer, is_han_character, on_focus_lost

#This should stay written exactly this way, and keep the same parenthesis
#format, as it is parsed by a very simple regexp to check for next
#release info from github, in config.py
__version__ = """0.10.11a"""
ankiweb_number = "3448800906"
release_info = """This version attempts to work with anki 2.1"""

prev = """
<br><b>Note to advanced users:</b> This version includes a rewritten <tt>edit_behavior.py</tt> function. If you did some customizations, you can keep using your version, but the new "fill missing" features will not work.</b>
"""

# import the main window object (mw) from aqt
from aqt import mw
# import the "show info" tool from utils.py
from aqt.utils import showInfo
# import all of the Qt GUI library
from aqt.qt import *

from .init_chinese import init_chinese

# We're going to add a menu item below. First we want to create a function to
# be called when the menu item is activated.

# create a new menu item, "test"
action = QAction("Chinese Addon", mw)
# set it to call testFunction when it's clicked
# need to loop in the add-on:
action.triggered.connect(init_chinese)
# and add it to the tools menu
mw.form.menuTools.addAction(action)
