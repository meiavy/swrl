function FindProxyForURL(url, host) {

    var PROXY = "PROXY 127.0.0.1:8123", DIRECT = "DIRECT";
    var hosts = [
        '1984bbs.org',
        'w3schools.com',
        'woolyss.com',
        '1e100.net',
        'abmr.com',
        'aboluowang.com',
        'adzerk.net',
        'akamai',
        'alexa.com',
        'allbuttonspressed.com',
        'amazon',
        'aws',
        'android.com',
        'angularjs.org',
        'askubuntu.com',
        'apache.org',
        'api.ancientrocklab.com',
        'appcelerator.',
        'appspot.',
        'atlassian.com',
        'attachmategroup.com',
        'aurumxchange.com',
        'bbc.co.uk',
        'brew.sh',
        'bbc.com',
        'biologymad.com',
        'bit',
        'blockchain.info',
        'blogblog.com',
        'blogger.com',
        'blogspot.',
        'boobstagram.com',
        'botanwang.com',
        'btc-e.com',
        'btcguild.com',
        'bullogger.com',
        'burst.com',
        'burst.net',
        'c9.io',
        'canoncial.com',
        'cdn13.com',
        'centregold.com',
        'chinadigitaltimes.net',
        'chinagfw.org',
        'chromium.org',
        'cloudflare.com',
        'cloudfront.net',
        'codecademy.com',
        'codehaus.org',
        'cosmicpay.com',
        'coursera.org',
        'clojure.org',
        'crbug.com',
        'debian.org',
        'devolutions.',
        'disqus.com',
        'dmm.co.jp',
        'dnspython.org',
        'docker.',
        'dongtaiwang.com',
        'doubleclick.net',
        'dropbox.com',
        'duckduckgo.com',
        'duolingo.com',
        'eclipse.org',
        'edgefonts.com',
        'edgefonts.net',
        'epochtimes.com',
        'erlang.org',
        'wikicdn.com',
        'evernote.com',
        'facebook.com',
        'fastly.net',
        'fbcdn.',
        'fb.me',
        'firebaseio.com',
        'feedburner.',
        'feedly.com',
        'ff.im',
        'flare.me',
        'frantech.com',
        'ftchinese.com',
        'getfoxyproxy.org',
        'gfx.ms',
        'ggpht.com',
        'github',
        'git-scm.com',
        'godaddy.com',
        'golang.org',
        'runabove.com',
        'rust-lang.org',
        'gomuse.com',
        'goo.gl',
        'google',
        'gstatic.com',
        'herokuapp.com',
        'howtoforge.com',
        'ign.com',
        'imagedunk.com',
        'imageporter.com',
        'images-amazon.com',
        'imdb.com',
        'immage.de',
        'irccloud-cdn.com',
        'irccloud.com',
        'incapsula.com',
        'instagram.com',
        'internetfreedom.org',
        'japan-whores.com',
        'jetbrains.com',
        'jkforum.net',
        'joyent.com',
        'kanzhongguo.com',
        'kenengba.com',
        'koding.com',
        'laravel.com',
        'lastpass.com',
        'launchpadlibrarian.net',
        'launchpad.net',
        'leaseweb.',
        'lesscss.org',
        'libertyreserve.com',
        'live.com',
        'madteam.co',
        'marc.info',
        'microsoft.com',
        'mirrorbooks.com',
        'mixero.com',
        'mlgao.com',
        'mozilla.',
        'msecnd.net',
        'msfn.org',
        'mtgox.com',
        'multiupload.com',
        'mysql.com',
        'nicovideo.jp',
        'namecheap.com',
        'nimg.jp',
        'nextmedia.com',
        'nltk.org',
        'note.acmu.org',
        'novell.com',
        'ntdtv.com',
        'nytimes.com',
        'oioioioi.info',
        'openshift.com',
        'opensuse.org',
        'openvpn.',
        'opera.com',
        'optimizely.',
        'outlook.com',
        'ow.ly',
        'paypal.com',
        'peacehall.com',
        'perfectgirls.net',
        'phncdn.com',
        'photonvps.com',
        'phpmyadmin.net',
        'php.net',
        'picleet.com',
        'picturedip.com',
        'pidgin.com',
        'pingdom.com',
        'pinimg.com',
        'pinterest.com',
        'pinyuan001.com',
        'pixnet.net',
        'planforcloud.com',
        'playframework.com',
        'porn.com',
        'pornhub.com',
        'progit.org',
        'python.org',
        'quickweb.com.nz',
        'quora.com',
        'racket-lang.org',
        'radio.com',
        'ramhost.com',
        'readthedocs.org',
        'reddit.com',
        'redhat.com',
        'redtube.com',
        'redtubefiles.com',
        'reuters.com',
        'rfi.fr',
        'rhcloud.com',
        'rncdn3.com',
        'rightscale.com',
        'rmdown.com',
        'rtbtc.net',
        'saltstack.com',
        'scala',
        'secretchina.com',
        'serverfault.com',
        'sexinsex.net',
        'sf.net',
        'skype.com',
        'slideshare.net',
        'sns.ly',
        'softlayer.com',
        'sourceforge.',
        'ssl-images-amazon.com',
        'sstatic.net',
        'stack',
        'stunnel.org',
        'superuser.com',
        'suse.com',
        'susestudio.com',
        'sytes.net',
        'syntevo.com',
        'twitch.tv',
        'ttvnw.net',
        't66y.com',
        'tanksporn.com',
        't.co',
        'tnaflix.com',
        'thefacebook.com',
        'thepiratebay.*',
        'tinypic.com',
        'trouter.io',
        'tube8.com',
        'tumblr.com',
        'tweetdeck.com',
        'twimg.com',
        'twitlonger.com',
        'twitter.com',
        'typekit.com',
        'typekit.net',
        'typepad.com',
        'vimeo.com',
        'vim.org',
        'voachinese.com',
        'vpngate.net',
        'wbur.org',
        'wiki',
        'wkbug.com',
        'wlxrs.',
        'wordpress.com',
        'wretch.cc',
        'wsimg.com',
        'wxwidgets.org',
        'wsj.com',
        'xmarks.com',
        'xnxx.com',
        'xvideos.com',
        'yahoo.com',
        'yfrog.com',
        'yimg.com',
        'youjizz.com',
        'youporn.com',
        'youtu',
        'ytimg.com',
        'zend'
    ];
    if (hosts.findIndex( i => { return host.indexOf(i) > -1; }) > -1) {
       return PROXY;
    }
    return DIRECT;

}
