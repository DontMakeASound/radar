const { SlashCommandBuilder } = require('discord.js');

console.log('loaded!');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('road')
        .setDescription('find a road!')
        .addStringOption(option =>
            option.setName('road')
            .setDescription('road to search for')
            .setAutocomplete(true)),
    async autocomplete(interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = ['quaent-vynsum', 'quaent-al-vynsum', 'quaent-tersis', 'quaent-al-tersis', 'quaent-viesom', 'quaent-al-viesom', 'quatun-nusas', 'quatun-et-nusas', 'quaent-qintis', 'quaent-al-qintis', 'quatun-odetum', 'quatun-et-odetum', 'quaent-al-odesum', 'quaent-in-odesum', 'quaent-al-nusis', 'quaent-in-nusis', 'qiient-tersom', 'qiient-in-tersom', 'qiient-odesas', 'qiient-qi-odesas', 'qiient-nutis', 'qiient-in-nutis', 'qiient-vyntum', 'qiient-in-vyntum', 'qiient-al-odesum', 'qiient-si-odesum', 'qiient-al-vynsis', 'qiient-qi-vynsis', 'qiitun-et-vynsom', 'qiitun-si-vynsom', 'qiient-al-tersas', 'qiient-qi-tersas', 'qiitun-vietis', 'qiitun-et-vietis', 'qiient-et-tertum', 'qiient-si-tertum', 'qiient-qinsum', 'qiient-et-qinsum', 'qiient-al-viesis', 'qiient-in-viesis', 'qiient-al-nusom', 'qiient-qi-nusom', 'qiient-et-nusas', 'qiient-si-nusas', 'qiient-et-odetis', 'qiient-sa-odetis', 'qiient-in-odetum', 'qiient-oc-odetum', 'qiitun-duosum', 'qiitun-al-duosum', 'qiient-al-qinsis', 'qiient-in-qinsis', 'secent-odesom', 'secent-qi-odesom', 'sectun-tersas', 'sectun-et-tersas', 'secent-al-odetis', 'secent-si-odetis', 'secent-vyntum', 'secent-et-vyntum', 'secent-viesum', 'secent-al-viesum', 'secent-et-odesis', 'secent-sa-odesis', 'sectun-qinsom', 'sectun-in-qinsom', 'secent-al-qinsom', 'secent-qi-qinsom', 'sectun-al-vyntis', 'sectun-in-vyntis', 'secent-nutum', 'secent-al-nutum', 'secent-al-tersum', 'secent-in-tersum', 'sectun-in-odesis', 'sectun-oc-odesis', 'secent-duosom', 'secent-al-duosom', 'secent-et-qinsas', 'secent-si-qinsas', 'setent-vietis', 'setent-al-vietis', 'settun-odetum', 'settun-et-odetum', 'setent-nusum', 'setent-et-nusum', 'settun-vynsis', 'settun-al-vynsis', 'settun-tersom', 'settun-al-tersom', 'setent-duosas', 'setent-al-duosas', 'setent-qintis', 'setent-et-qintis', 'settun-al-odetum', 'settun-in-odetum', 'setent-al-qinsum', 'setent-in-qinsum', 'settun-al-nusis', 'settun-in-nusis', 'ouyos-aoeuam', 'coues-exakrom', 'puros-amayam', 'pures-ouozlum', 'soros-axaesum', 'huyos-uxeulum', 'ceres-iooinum', 'cetos-obaelos', 'oieos-umiutum', 'sebos-avoirom', 'teros-auiusum', 'oebos-ixakaum', 'touos-uoemtum', 'xasos-aeoilos', 'xuros-eyoztum', 'pasos-avosam', 'oasos-uromlum', 'casos-uruxtum', 'ceros-aeaylum', 'xouos-aioblos', 'oasos-eraerom', 'tetos-igaelum', 'hynos-oiaelos', 'hebos-ulamsum', 'hiros-iuaerom', 'cynos-avixnum', 'conos-avaelum', 'tetos-ulaurom', 'oures-araosum', 'hures-ugumtum', 'hasos-iuimaum', 'foros-egoisum', 'hasos-agoitum', 'setos-avamsum', 'tonos-obayam', 'honos-umayaum', 'huyes-ogozlum', 'curos-avulsum', 'cebos-avemlum', 'hasos-inayaum', 'sasos-egeylos', 'coros-aiayrom', 'hiros-exozlos', 'tiros-ouultum', 'cases-ugumlos', 'fynes-unavtum', 'fetos-aiaylos', 'fouos-agosaum', 'huyos-eyoztum', 'poues-unatam', 'fouos-amaurom', 'suyos-onaytum', 'xasos-oneulum', 'oynos-oyozam', 'coros-atinaum', 'sasos-oiozlum', 'xynos-oyogam', 'cynos-oxaeaum', 'tynos-atatlos', 'firos-enomaum', 'hynes-exemrom', 'hebes-ouaylos', 'foues-aeaosum', 'xilos-osayam', 'casos-ayosrom', 'souos-ososlos', 'xebos-emimsum', 'oetos-oyexlos', 'xebos-exostum', 'tynos-eyexrom', 'casos-aximam', 'hasos-ayousum', 'fasos-ayiotum', 'pebos-avosrom', 'sases-avuotum', 'xases-oxoulum', 'hieos-avaolum', 'xasos-aoemaum', 'hasos-osuorom', 'oynos-eramtum', 'couos-ayayaum', 'siros-obobrom', 'souos-umogaum', 'cilos-avioaum', 'fonos-aiugsum', 'synos-ayailos', 'xiles-aiavlum', 'sases-aoarsum', 'casos-aiagsum', 'tieos-ayoslum', 'hieos-aiigaum', 'poros-aiayrom', 'cilos-ofailos', 'silos-apenlum', 'fynos-alodrom', 'firos-ezatam', 'firos-osinsum', 'soues-uzurtum', 'ooros-ataltum', 'hynes-ieatun', 'fuyes-izohun', 'xetos-obursum', 'oetos-ofailos', 'tynos-igurlum', 'puros-ofavam', 'setos-aiaitum', 'tynos-uxavrom', 'souos-availos', 'sebos-ugersum', 'peros-aiataum', 'pieos-ofairom', 'sieos-ofugtum', 'tasos-iriglos', 'tiros-odoxlum', 'xases-ataglos', 'oires-oloblum', 'firos-aiavam', 'heros-atoyam', 'petos-aietam', 'touos-ataglos', 'poros-oconun', 'honos-oyezam', 'fieos-atezsum', 'ooros-ecunsum', 'coros-alieam', 'couos-opodam', 'horos-ohenlum', 'files-azazsum', 'sasos-abizaum', 'fones-opavun', 'fiees-ohohtum', 'siros-ofurlos', 'oiros-alaiam', 'xiros-aiairom', 'silos-oyarlum', 'fonos-oleraum', 'fieos-aiuttum', 'filos-abalam', 'synos-oyarlos', 'febos-acalun', 'pieos-eterrom', 'feros-oyuctum', 'pynos-opabrom', 'foros-uzazlum', 'cieos-atatlum', 'huros-atontum', 'tonos-aboysum', 'hiles-izizaum', 'sebos-oyohun', 'cilos-otatrom', 'oasitos-aoeuam', 'curites-exakrom', 'petitos-amayam', 'pynites-ouozlum', 'suyitos-axaesum', 'honitos-uxeulum', 'cuyites-iooinum', 'cieitos-obaelos', 'oonitos-umiutum', 'siritos-avoirom', 'tuyitos-auiusum', 'oieitos-ixakaum', 'turitos-uoemtum', 'xouitos-aeoilos', 'xouitos-eyoztum', 'peritos-avosam', 'oynitos-uromlum', 'conitos-uruxtum', 'cebitos-aeaylum', 'xuyitos-aioblos', 'oebitos-eraerom', 'tebitos-igaelum', 'huritos-oiaelos', 'hynitos-ulamsum', 'hetitos-iuaerom', 'cetitos-avixnum', 'casitos-avaelum', 'tasitos-ulaurom', 'oynites-araosum', 'hilites-ugumtum', 'huritos-iuimaum', 'fynitos-egoisum', 'huyitos-agoitum', 'soritos-avamsum', 'tasitos-obayam', 'hasitos-umayaum', 'hynites-ogozlum', 'ceritos-avulsum', 'coritos-avemlum', 'heritos-inayaum', 'seritos-egeylos', 'cetitos-aiayrom', 'heritos-exozlos', 'tieitos-ouultum', 'cieites-ugumlos', 'fieites-unavtum', 'foritos-aiaylos', 'fynitos-agosaum', 'heritos-eyoztum', 'pirites-unatam', 'fonitos-amaurom', 'seritos-onaytum', 'xetitos-oneulum', 'oebitos-oyozam', 'casitos-atinaum', 'souitos-oiozlum', 'xebitos-oyogam', 'conitos-oxaeaum', 'turitos-atatlos', 'feritos-enomaum', 'hebites-exemrom', 'hurites-ouaylos', 'fynites-aeaosum', 'xoritos-osayam', 'cieitos-ayosrom', 'synitos-ososlos', 'xetitos-emimsum', 'oeritos-oyexlos', 'xoritos-exostum', 'tieitos-eyexrom', 'cetitos-aximam', 'hynitos-ayousum', 'fuyitos-ayiotum', 'petitos-avosrom', 'suyites-avuotum', 'xerites-oxoulum', 'hasitos-avaolum', 'xilitos-aoemaum', 'hilitos-osuorom', 'oiritos-eramtum', 'curitos-ayayaum', 'setitos-obobrom', 'sasitos-umogaum', 'cieitos-avioaum', 'fynitos-aiugsum', 'sonitos-ayailos', 'xonites-aiavlum', 'synites-aoarsum', 'cynitos-aiagsum', 'tetitos-ayoslum', 'hilitos-aiigaum', 'ponitos-aiayrom', 'conitos-ofailos', 'soritos-apenlum', 'firitos-alodrom', 'fynitos-ezatam', 'feritos-osinsum', 'suyites-uzurtum', 'ouritos-ataltum', 'hurites-ieatun', 'filites-izohun', 'xynitos-obursum', 'ouritos-ofailos', 'tonitos-igurlum', 'piritos-ofavam', 'soritos-aiaitum', 'tonitos-uxavrom', 'synitos-availos', 'sasitos-ugersum', 'puyitos-aiataum', 'pouitos-ofairom', 'suyitos-ofugtum', 'toritos-iriglos', 'tebitos-odoxlum', 'xurites-ataglos', 'oynites-oloblum', 'furitos-aiavam', 'hynitos-atoyam', 'pynitos-aietam', 'tilitos-ataglos', 'peritos-oconun', 'hynitos-oyezam', 'fasitos-atezsum', 'oeritos-ecunsum', 'casitos-alieam', 'cilitos-opodam', 'huyitos-ohenlum', 'fasites-azazsum', 'silitos-abizaum', 'febites-opavun', 'ferites-ohohtum', 'synitos-ofurlos', 'oouitos-alaiam', 'xoritos-aiairom', 'sasitos-oyarlum', 'fasitos-oleraum', 'fouitos-aiuttum', 'fynitos-abalam', 'suyitos-oyarlos', 'fuyitos-acalun', 'pilitos-eterrom', 'fasitos-oyuctum', 'piritos-opabrom', 'filitos-uzazlum', 'cynitos-atatlum', 'hebitos-atontum', 'tuyitos-aboysum', 'honites-izizaum', 'siritos-oyohun', 'cieitos-otatrom'];
        const filtered = choices.filter(choice => choice.startsWith(focusedValue.toLowerCase()));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice })),
        );
    },
    async execute(interaction) {
        const road = interaction.options.getString('road', true);
        await interaction.reply('https://omega-strikers-static.s3.us-west-2.amazonaws.com/albionroads/output_v6/' + road.toLowerCase() + '.png');
    },
};