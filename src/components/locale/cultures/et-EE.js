/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('et-EE', {
  // layout/language
  language: 'et',
  englishName: 'Estonian (Estonia)',
  nativeName: 'eesti (Eesti)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: ':',
      short: 'dd.MM.yyyy', // use four digit year
      medium: 'd. MMM y',
      long: 'd. MMMM yyyy',
      full: 'EEEE, d. MMMM y',
      month: 'd. MMMM',
      year: 'MMMM yyyy',
      timestamp: 'HH:mm:ss',
      datetime: 'dd.MM.yyyy HH:mm',
      timezone: 'dd.MM.yyyy HH:mm zz',
      timezoneLong: 'dd.MM.yyyy HH:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'],
      abbreviated: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
      narrow: ['P', 'E', 'T', 'K', 'N', 'R', 'L']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
      abbreviated: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'au', 'sept', 'okt', 'nov', 'dets']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['e.k.', 'p.k.']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'kr',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    percentSuffix: ' %',
    percentPrefix: '',
    minusSign: '-',
    decimal: ',',
    group: ' ',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Autoriõigus &copy; {0} Infor. Kõik õigused on reserveeritud. Kõik siin esitatud sõnalised ja kujundusmärgid on ettevõtte Infor ja/või selle sidus- ja tütarettevõtete kaubamärgid ja/või registreeritud kaubamärgid. Kõik õigused on reserveeritud. Kõik teised siin loetletud kaubamärgid kuuluvad nende vastavatele omanikele.' },
    Actions: { id: 'Actions', value: 'Toimingud', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Lisaüksused', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Lisa', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Lisa kommentaarid', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Lisa uus vahekaart', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Ajutine eemalolek', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Loo täpsem filter', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Hoiatus', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Hoiatusteated leheküljel', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Kõik', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Kõik tulemused:', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Allajoondus', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Horisontaalne keskjoondus', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Merevaikkollane', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametüstpunane', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Rakenda', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Menüü', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Manusta', comment: 'Attach' },
    Available: { id: 'Available', value: 'Saadaval', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Taevasinine', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Taustavärv', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Vahemikus', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Plokktsitaat', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Paks kiri', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Järjehoidjaga märgitud', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Märgi see järjehoidjaga', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Jäljerida', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Brauser', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Täpploend', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalender', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kaamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Loobu', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Suurtähelukk sees', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Ostukorv', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Keskjoondus', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Märke alles {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Märkide maksimumarv: ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Valiku muutmiseks kasutage nooleklahve.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Muuda vaadet', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Märkeruut', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Märgitud', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Tühjenda', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Tühjenda filter', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Tühjenda vorming', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Tühjenda valik)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Kell', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Sulge', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Redaktoris klõpsatav', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopeeri', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Ahenda', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Ahenda rakendusesalv', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Veerud', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Kommentaarid', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Ettevõtte puhkus', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponent', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Koosta', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Valmis', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Kinnita', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Kinnita teated leheküljel', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Küpsised lubatud', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Sisaldab', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'CSS-i klass', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Lõika', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Kuupäev', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Päev', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Päevad ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} päeva üle tähtaja', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} päeva jäänud', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Kustuta', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Seade', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Jaota horisontaalselt', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokument', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Vabalt valitav puhkus', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Rida on muudetud', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Puuri alla', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Puuri üles', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Rippmenüü', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Ei sisalda', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Ei lõpe', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Ei võrdu', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Ei alga', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Alla', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Laadi alla', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Paljunda', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Kas valitud või valimata', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Lõpeb', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Sisestage kommentaarid siia...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Tõrge', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Failitüüp pole lubatud', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Faili suuruse piirang on ületatud', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Failide lubatud maksimumarv on ületatud', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Tõrketeated leheküljel', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'E-posti aadress ei kehti.', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragdroheline', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Laienda', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Laienda rakendusesalv', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Laienda / Ahenda', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Ekspordi arvutustabelina', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Muuda', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Võrdub', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Sündmus', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Välju täisvaatest', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Ekspordi', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Ekspordi Excelisse', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Lemmik', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Failide üleslaadimine. Sirvides otsimiseks vajutage klahvi Enter.', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Välja filter', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filter', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Esimene leht', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Kaust', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Saatja', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Täisvaade', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Liigu edasi', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Liigu tagasi', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Liigu alla', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Liigu üles', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Mine', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafiithall', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Suurem või võrdne', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Suurem kui', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Ruudustik', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Tund', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Tunnid', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Pealkiri kolm', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Pealkiri neli', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Suurim', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Avaleht', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'HTML-vaade', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Pilt', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Impordi', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Teave', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Infoteated leheküljel', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Pooleli', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Lisa', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Lisa ankur', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Lisa pilt', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Lisa link', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Lisa URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Kaldkiri', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Kehtetu kuupäev', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Kehtetu aeg', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventuur', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Vahemikus', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'On tühi', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Ei ole tühi', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Valitud üksust', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Keskjoondus', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Vasakjoondus', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Paremjoondus', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Märksõna', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Käivita', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Viimane leht', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Vasak', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legend', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Väiksem või võrdne', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Väiksem kui', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Link', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Laadi', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Laadimine', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Lokaat', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Lukustatud', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Logi välja', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Otsimine', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Väikseim', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Post', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Kaardimärk', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maksimeeri', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediaan', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Keskmine', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Menüü', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Jaga Ming.le-ga', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minutid', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimeeri', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Miinus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobiil', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Kuu', comment: 'As in a date month' },
    More: { id: 'More', value: 'Rohkem...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Rohkem toiminguid', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Liiguta vasakule', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Liiguta paremale', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Muudetud', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Uus', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Uus dokument', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Uus üksus', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Uus aken', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Järgmine', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Järgmine lehekülg', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Järgmine kuu', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Ei', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Andmed pole saadaval', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Andmed pole saadaval. Valige uus filter, kui soovite näha rohkem tulemusi.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Andmed pole saadaval. Kui soovite näha rohkem tulemusi, tehke valik ülal asuvas loendis.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Mitte ükski', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Tulemusi pole', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Tavaline', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Märkmed', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Pole valitud', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Nummerdatud loend', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OK', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Ava/tagasi/sule', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Ava/sule', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operatsioonisüsteem', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Lisa/eemalda nummerdatud loend', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'lehekülg ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Lehekülg {0}/{1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Asute praegu leheküljel ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Tasustatud puhkus', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Kleebi', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Parool</strong><br> peab olema vähemalt 10 tähemärgi pikkune<br>peab sisaldama vähemalt üht suurtähte<br>peab sisaldama vähemalt üht väiketähte<br>peab sisaldama üht erimärki<br>ei tohi sisaldada teie kasutajanime<br>ei tohi olla teie varem kasutatud parool<br>.', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Parool peab olema sama', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Tipp', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Ootel', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Isikupärasta veerud', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Kava', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platvorm', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Periood', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Kuupäeva valimiseks vajutage allanoolt.', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Kontekstimenüü avamiseks vajutage Shift+F10.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Eelmine', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Eelmine kuu', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Eelmine lehekülg', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Prindi', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Vahemik', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} kirjet leheküljel', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Tee uuesti', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Järjesta read ümber', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Värskenda', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Taotle puhkeaega', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Nõutav', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Lähtesta', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Lähtesta vaikeseaded', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Tulemus', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Tulemused', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Paremjoondus', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Paremjoondus', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Paremale', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Rollid', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Rea kõrgus', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubiinpunane', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Rakenda filter', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Sama aken', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Salvesta', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Salvesta praegune vaade', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Salvestatud vaated', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Graafik', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Sekundid', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Otsi', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Otsi veeru nime järgi', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Otsi kaustast', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Otsi loendit', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Valit', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Vali päev', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Valitud', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Vali kõik', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Saada', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Sea kellaaeg', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Sätted', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Lühike', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Kuva filtri rida', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Kuva vähem', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Kuva rohkem', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Haiguse aeg', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Paekivihall', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Slaid {0} / {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Slaidid {0} ja {1} / {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Pide:', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Maksimumvahemiku pide:', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Miinimumvahemiku pide:', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Liigu põhisisu juurde', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Olek', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Algab', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: 'Tehtud {0} kokku {1} sammust', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Läbikriipsutus', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Sordi tõusvalt', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Sordi laskuvalt', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Sordi alla', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Sordi üles', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Allindeks', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Ülaindeks', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Vahekaarte...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Kaardimärk', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Kõrge', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Sihtmärk', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Meeskonna üritus', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Kontrolli lokaadi vaikeseadistust', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Teksti värv', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Pukseeri üleslaaditavad failid', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Üleslaadimiseks pukseeri või <span class="hyperlink">vali failid</span>', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Tühista selle faili üleslaadimine', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Sulge see tõrge', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Sulge see tõrge', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Taimer', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Saaja', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Täna', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Lülita paksu kirja', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Lülita pealkirja 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Lülita pealkirja 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Lülita kaldkirja', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Lülita allakriipsutust', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Tööriistariba', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Ülesjoondus', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Summa', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Summad', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Ahenda puu', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Laienda puu', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Türkiissinine', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Üles', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Eelolevad sündmused', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Eelolev puhkus', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Laadi üles', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Puuduv kuupäev', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Allakriipsutus', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Ennista', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Lukustamata', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Lisa/eemalda täpploend', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'See sisu ei ole kättesaadav, sest selle puhul on kasutusel funktsioonid, mida teie praegune brauseriversioon ei toeta.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Valimiseks kasutage nooleklahve.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Otsimiseks kasutage sisestusklahvi või allanoolt.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Kasutaja', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Kasutaja profiil', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS-i versioon', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Horisontaalne keskjoondus', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Kuva lähtetekst', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Kuva küljendus', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Nädal', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Aasta', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Jah', comment: 'On a dialog button' }
  }
});
