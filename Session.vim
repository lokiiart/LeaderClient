let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~\OneDrive\Documents\GitHub\Leader_Bak
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
set stal=2
tabnew
tabnew
tabnew
tabrewind
edit app\models\parkStatus.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 128 + 126) / 252)
exe 'vert 2resize ' . ((&columns * 123 + 126) / 252)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 8 - ((7 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
8
normal! 09|
wincmd w
argglobal
if bufexists("app\services\read.js") | buffer app\services\read.js | else | edit app\services\read.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 6 - ((5 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 128 + 126) / 252)
exe 'vert 2resize ' . ((&columns * 123 + 126) / 252)
tabnext
edit app\containers\Home.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 128 + 126) / 252)
exe 'vert 2resize ' . ((&columns * 123 + 126) / 252)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 180 - ((26 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
180
normal! 016|
wincmd w
argglobal
if bufexists("app\router.js") | buffer app\router.js | else | edit app\router.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 35 - ((34 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
35
normal! 02|
wincmd w
exe 'vert 1resize ' . ((&columns * 128 + 126) / 252)
exe 'vert 2resize ' . ((&columns * 123 + 126) / 252)
tabnext
edit NERD_tree_2
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 35 + 126) / 252)
exe 'vert 2resize ' . ((&columns * 107 + 126) / 252)
exe 'vert 3resize ' . ((&columns * 108 + 126) / 252)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
if bufexists("package.json") | buffer package.json | else | edit package.json | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 16 - ((15 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 028|
wincmd w
argglobal
if bufexists("yarncheck") | buffer yarncheck | else | edit yarncheck | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 35 + 126) / 252)
exe 'vert 2resize ' . ((&columns * 107 + 126) / 252)
exe 'vert 3resize ' . ((&columns * 108 + 126) / 252)
tabnext
edit \Users\lokii\_vimrc
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 83 - ((41 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
83
normal! 046|
tabnext 3
set stal=1
badd +28 app\models\parkStatus.js
badd +98 app\containers\Home.js
badd +14 package.json
badd +1 \Users\lokii\_vimrc
badd +1 app\services\read.js
badd +18 app\router.js
badd +0 NERD_tree_2
badd +0 yarncheck
badd +24 app\containers\Finace.js
badd +4 app\utils\config.js
badd +32 app\models\financeDemands.js
badd +23 app\models\app.js
badd +96 app\components\DataFramList\DataTableList.js
badd +40 loki\react-native-data-table\package.json
badd +64 app\utils\request.js
badd +11 app\index.js
badd +4 index.js
badd +8 node_modules\react-router\package.json
badd +17 app\utils\dva.js
badd +5 app\containers\Loading.js
badd +4 app\services\auth.js
badd +52 app\containers\Project.js
badd +41 app\components\DataFramList\FinaceRow.js
badd +3 node_modules\react-native-echarts-wrapper\package.json
badd +44 node_modules\react-navigation\package.json
badd +4 node_modules\@ant-design\react-native\package.json
badd +2 node_modules\babel-preset-react-native\package.json
badd +28 package.json_bak
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOS
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
