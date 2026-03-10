/**
 * Tell Pal – Multilingual Data (de, en, tr, uk, ru)
 * Each item has i18n: { lang: { label, speech } }
 * Helper: getItemText(item) returns { label, speech } for current language
 */

// Shorthand: t(de, en, tr, uk, ru) → i18n object
function _t(de, en, tr, uk, ru) {
    return { de, en, tr, uk, ru };
}
function _ls(de, en, tr, uk, ru) {
    return {
        i18n: {
            de: { label: de[0], speech: de[1] },
            en: { label: en[0], speech: en[1] },
            tr: { label: tr[0], speech: tr[1] },
            uk: { label: uk[0], speech: uk[1] },
            ru: { label: ru[0], speech: ru[1] },
        }
    };
}

function getItemText(item) {
    const lang = I18N.getLang();
    const i = item.i18n;
    if (i && i[lang]) return i[lang];
    if (i && i.de) return i.de;
    return { label: '?', speech: '' };
}

const APP_DATA = { categories: [
    // ═══════════════ ESSEN ═══════════════
    {
        id: 'essen', emoji: '🍽️', color: 'orange',
        i18n: {
            de: { label: 'Essen', speech: 'Ich möchte etwas essen' },
            en: { label: 'Eat', speech: 'I want to eat something' },
            tr: { label: 'Yemek', speech: 'Bir şey yemek istiyorum' },
            uk: { label: 'Їсти', speech: 'Я хочу їсти' },
            ru: { label: 'Еда', speech: 'Я хочу есть' },
        },
        items: [
            { id: 'brot', emoji: '🍞', i18n: { de: { label: 'Brot', speech: 'Ich möchte Brot' }, en: { label: 'Bread', speech: 'I want bread' }, tr: { label: 'Ekmek', speech: 'Ekmek istiyorum' }, uk: { label: 'Хліб', speech: 'Я хочу хліб' }, ru: { label: 'Хлеб', speech: 'Я хочу хлеб' } } },
            { id: 'brötchen', emoji: '🥖', i18n: { de: { label: 'Brötchen', speech: 'Ich möchte ein Brötchen' }, en: { label: 'Roll', speech: 'I want a bread roll' }, tr: { label: 'Sandviç ekmeği', speech: 'Sandviç ekmeği istiyorum' }, uk: { label: 'Булочка', speech: 'Я хочу булочку' }, ru: { label: 'Булочка', speech: 'Я хочу булочку' } } },
            { id: 'müsli', emoji: '🥣', i18n: { de: { label: 'Müsli', speech: 'Ich möchte Müsli' }, en: { label: 'Cereal', speech: 'I want cereal' }, tr: { label: 'Müsli', speech: 'Müsli istiyorum' }, uk: { label: 'Мюслі', speech: 'Я хочу мюслі' }, ru: { label: 'Мюсли', speech: 'Я хочу мюсли' } } },
            { id: 'rührei', emoji: '🍳', i18n: { de: { label: 'Rührei', speech: 'Ich möchte Rührei' }, en: { label: 'Scrambled eggs', speech: 'I want scrambled eggs' }, tr: { label: 'Çırpılmış yumurta', speech: 'Çırpılmış yumurta istiyorum' }, uk: { label: 'Яєчня', speech: 'Я хочу яєчню' }, ru: { label: 'Яичница', speech: 'Я хочу яичницу' } } },
            { id: 'gekochtes-ei', emoji: '🥚', i18n: { de: { label: 'Gekochtes Ei', speech: 'Ich möchte ein gekochtes Ei' }, en: { label: 'Boiled egg', speech: 'I want a boiled egg' }, tr: { label: 'Haşlanmış yumurta', speech: 'Haşlanmış yumurta istiyorum' }, uk: { label: 'Варене яйце', speech: 'Я хочу варене яйце' }, ru: { label: 'Варёное яйцо', speech: 'Я хочу варёное яйцо' } } },
            { id: 'spiegelei', emoji: '🍳', i18n: { de: { label: 'Spiegelei', speech: 'Ich möchte ein Spiegelei' }, en: { label: 'Fried egg', speech: 'I want a fried egg' }, tr: { label: 'Sahanda yumurta', speech: 'Sahanda yumurta istiyorum' }, uk: { label: 'Яєчня', speech: 'Я хочу яєчню' }, ru: { label: 'Глазунья', speech: 'Я хочу глазунью' } } },
            { id: 'spaghetti', emoji: '🍝', i18n: { de: { label: 'Spaghetti', speech: 'Ich möchte Spaghetti' }, en: { label: 'Spaghetti', speech: 'I want spaghetti' }, tr: { label: 'Spagetti', speech: 'Spagetti istiyorum' }, uk: { label: 'Спагеті', speech: 'Я хочу спагеті' }, ru: { label: 'Спагетти', speech: 'Я хочу спагетти' } } },
            { id: 'pizza', emoji: '🍕', i18n: { de: { label: 'Pizza', speech: 'Ich möchte Pizza' }, en: { label: 'Pizza', speech: 'I want pizza' }, tr: { label: 'Pizza', speech: 'Pizza istiyorum' }, uk: { label: 'Піца', speech: 'Я хочу піцу' }, ru: { label: 'Пицца', speech: 'Я хочу пиццу' } } },
            { id: 'suppe', emoji: '🍲', i18n: { de: { label: 'Suppe', speech: 'Ich möchte Suppe' }, en: { label: 'Soup', speech: 'I want soup' }, tr: { label: 'Çorba', speech: 'Çorba istiyorum' }, uk: { label: 'Суп', speech: 'Я хочу суп' }, ru: { label: 'Суп', speech: 'Я хочу суп' } } },
            { id: 'reis', emoji: '🍚', i18n: { de: { label: 'Reis', speech: 'Ich möchte Reis' }, en: { label: 'Rice', speech: 'I want rice' }, tr: { label: 'Pilav', speech: 'Pilav istiyorum' }, uk: { label: 'Рис', speech: 'Я хочу рис' }, ru: { label: 'Рис', speech: 'Я хочу рис' } } },
            {
                id: 'obst', emoji: '🍎', color: 'green',
                i18n: { de: { label: 'Obst', speech: 'Ich möchte Obst' }, en: { label: 'Fruit', speech: 'I want fruit' }, tr: { label: 'Meyve', speech: 'Meyve istiyorum' }, uk: { label: 'Фрукти', speech: 'Я хочу фрукти' }, ru: { label: 'Фрукты', speech: 'Я хочу фрукты' } },
                items: [
                    { id: 'apfel', emoji: '🍎', i18n: { de: { label: 'Apfel', speech: 'Ich möchte einen Apfel' }, en: { label: 'Apple', speech: 'I want an apple' }, tr: { label: 'Elma', speech: 'Elma istiyorum' }, uk: { label: 'Яблуко', speech: 'Я хочу яблуко' }, ru: { label: 'Яблоко', speech: 'Я хочу яблоко' } } },
                    { id: 'banane', emoji: '🍌', i18n: { de: { label: 'Banane', speech: 'Ich möchte eine Banane' }, en: { label: 'Banana', speech: 'I want a banana' }, tr: { label: 'Muz', speech: 'Muz istiyorum' }, uk: { label: 'Банан', speech: 'Я хочу банан' }, ru: { label: 'Банан', speech: 'Я хочу банан' } } },
                    { id: 'orange-fruit', emoji: '🍊', i18n: { de: { label: 'Orange', speech: 'Ich möchte eine Orange' }, en: { label: 'Orange', speech: 'I want an orange' }, tr: { label: 'Portakal', speech: 'Portakal istiyorum' }, uk: { label: 'Апельсин', speech: 'Я хочу апельсин' }, ru: { label: 'Апельсин', speech: 'Я хочу апельсин' } } },
                    { id: 'trauben', emoji: '🍇', i18n: { de: { label: 'Trauben', speech: 'Ich möchte Trauben' }, en: { label: 'Grapes', speech: 'I want grapes' }, tr: { label: 'Üzüm', speech: 'Üzüm istiyorum' }, uk: { label: 'Виноград', speech: 'Я хочу виноград' }, ru: { label: 'Виноград', speech: 'Я хочу виноград' } } },
                    { id: 'erdbeeren', emoji: '🍓', i18n: { de: { label: 'Erdbeeren', speech: 'Ich möchte Erdbeeren' }, en: { label: 'Strawberries', speech: 'I want strawberries' }, tr: { label: 'Çilek', speech: 'Çilek istiyorum' }, uk: { label: 'Полуниці', speech: 'Я хочу полуниці' }, ru: { label: 'Клубника', speech: 'Я хочу клубнику' } } },
                    { id: 'wassermelone', emoji: '🍉', i18n: { de: { label: 'Wassermelone', speech: 'Ich möchte Wassermelone' }, en: { label: 'Watermelon', speech: 'I want watermelon' }, tr: { label: 'Karpuz', speech: 'Karpuz istiyorum' }, uk: { label: 'Кавун', speech: 'Я хочу кавун' }, ru: { label: 'Арбуз', speech: 'Я хочу арбуз' } } },
                ]
            },
            {
                id: 'süssigkeiten', emoji: '🍬', color: 'pink',
                i18n: { de: { label: 'Süßigkeiten', speech: 'Ich möchte Süßigkeiten' }, en: { label: 'Sweets', speech: 'I want sweets' }, tr: { label: 'Tatlılar', speech: 'Tatlı istiyorum' }, uk: { label: 'Солодощі', speech: 'Я хочу солодощі' }, ru: { label: 'Сладости', speech: 'Я хочу сладости' } },
                items: [
                    { id: 'schokolade', emoji: '🍫', i18n: { de: { label: 'Schokolade', speech: 'Ich möchte Schokolade' }, en: { label: 'Chocolate', speech: 'I want chocolate' }, tr: { label: 'Çikolata', speech: 'Çikolata istiyorum' }, uk: { label: 'Шоколад', speech: 'Я хочу шоколад' }, ru: { label: 'Шоколад', speech: 'Я хочу шоколад' } } },
                    { id: 'gummibärchen', emoji: '🍬', i18n: { de: { label: 'Gummibärchen', speech: 'Ich möchte Gummibärchen' }, en: { label: 'Gummy bears', speech: 'I want gummy bears' }, tr: { label: 'Yumuşak şeker', speech: 'Yumuşak şeker istiyorum' }, uk: { label: 'Жувальні цукерки', speech: 'Я хочу жувальні цукерки' }, ru: { label: 'Мармелад', speech: 'Я хочу мармелад' } } },
                    { id: 'eis', emoji: '🍦', i18n: { de: { label: 'Eis', speech: 'Ich möchte Eis' }, en: { label: 'Ice cream', speech: 'I want ice cream' }, tr: { label: 'Dondurma', speech: 'Dondurma istiyorum' }, uk: { label: 'Морозиво', speech: 'Я хочу морозиво' }, ru: { label: 'Мороженое', speech: 'Я хочу мороженое' } } },
                    { id: 'keks', emoji: '🍪', i18n: { de: { label: 'Keks', speech: 'Ich möchte einen Keks' }, en: { label: 'Cookie', speech: 'I want a cookie' }, tr: { label: 'Kurabiye', speech: 'Kurabiye istiyorum' }, uk: { label: 'Печиво', speech: 'Я хочу печиво' }, ru: { label: 'Печенье', speech: 'Я хочу печенье' } } },
                    { id: 'kuchen', emoji: '🍰', i18n: { de: { label: 'Kuchen', speech: 'Ich möchte Kuchen' }, en: { label: 'Cake', speech: 'I want cake' }, tr: { label: 'Pasta', speech: 'Pasta istiyorum' }, uk: { label: 'Торт', speech: 'Я хочу торт' }, ru: { label: 'Торт', speech: 'Я хочу торт' } } },
                ]
            },
        ]
    },
    // ═══════════════ TRINKEN ═══════════════
    {
        id: 'trinken', emoji: '🥤', color: 'blue',
        i18n: {
            de: { label: 'Trinken', speech: 'Ich möchte etwas trinken' },
            en: { label: 'Drink', speech: 'I want something to drink' },
            tr: { label: 'İçecek', speech: 'Bir şey içmek istiyorum' },
            uk: { label: 'Пити', speech: 'Я хочу пити' },
            ru: { label: 'Пить', speech: 'Я хочу пить' },
        },
        items: [
            { id: 'wasser', emoji: '💧', i18n: { de: { label: 'Wasser', speech: 'Ich möchte Wasser' }, en: { label: 'Water', speech: 'I want water' }, tr: { label: 'Su', speech: 'Su istiyorum' }, uk: { label: 'Вода', speech: 'Я хочу воду' }, ru: { label: 'Вода', speech: 'Я хочу воду' } } },
            { id: 'saft', emoji: '🧃', i18n: { de: { label: 'Saft', speech: 'Ich möchte Saft' }, en: { label: 'Juice', speech: 'I want juice' }, tr: { label: 'Meyve suyu', speech: 'Meyve suyu istiyorum' }, uk: { label: 'Сік', speech: 'Я хочу сік' }, ru: { label: 'Сок', speech: 'Я хочу сок' } } },
            { id: 'milch', emoji: '🥛', i18n: { de: { label: 'Milch', speech: 'Ich möchte Milch' }, en: { label: 'Milk', speech: 'I want milk' }, tr: { label: 'Süt', speech: 'Süt istiyorum' }, uk: { label: 'Молоко', speech: 'Я хочу молоко' }, ru: { label: 'Молоко', speech: 'Я хочу молоко' } } },
            { id: 'tee', emoji: '🍵', i18n: { de: { label: 'Tee', speech: 'Ich möchte Tee' }, en: { label: 'Tea', speech: 'I want tea' }, tr: { label: 'Çay', speech: 'Çay istiyorum' }, uk: { label: 'Чай', speech: 'Я хочу чай' }, ru: { label: 'Чай', speech: 'Я хочу чай' } } },
            { id: 'kakao', emoji: '☕', i18n: { de: { label: 'Kakao', speech: 'Ich möchte Kakao' }, en: { label: 'Hot chocolate', speech: 'I want hot chocolate' }, tr: { label: 'Sıcak çikolata', speech: 'Sıcak çikolata istiyorum' }, uk: { label: 'Какао', speech: 'Я хочу какао' }, ru: { label: 'Какао', speech: 'Я хочу какао' } } },
            { id: 'sprudel', emoji: '🫧', i18n: { de: { label: 'Sprudel', speech: 'Ich möchte Sprudel' }, en: { label: 'Sparkling water', speech: 'I want sparkling water' }, tr: { label: 'Maden suyu', speech: 'Maden suyu istiyorum' }, uk: { label: 'Газована вода', speech: 'Я хочу газовану воду' }, ru: { label: 'Газировка', speech: 'Я хочу газировку' } } },
        ]
    },
    // ═══════════════ SPIELEN ═══════════════
    {
        id: 'spielen', emoji: '🎮', color: 'green',
        i18n: {
            de: { label: 'Spielen', speech: 'Ich möchte spielen' },
            en: { label: 'Play', speech: 'I want to play' },
            tr: { label: 'Oynamak', speech: 'Oynamak istiyorum' },
            uk: { label: 'Грати', speech: 'Я хочу грати' },
            ru: { label: 'Играть', speech: 'Я хочу играть' },
        },
        items: [
            { id: 'draussen-spielen', emoji: '🏃', i18n: { de: { label: 'Draußen spielen', speech: 'Ich möchte draußen spielen' }, en: { label: 'Play outside', speech: 'I want to play outside' }, tr: { label: 'Dışarıda oynamak', speech: 'Dışarıda oynamak istiyorum' }, uk: { label: 'Гратися надворі', speech: 'Я хочу гратися надворі' }, ru: { label: 'Играть на улице', speech: 'Я хочу играть на улице' } } },
            { id: 'malen', emoji: '🎨', i18n: { de: { label: 'Malen', speech: 'Ich möchte malen' }, en: { label: 'Paint', speech: 'I want to paint' }, tr: { label: 'Resim yapmak', speech: 'Resim yapmak istiyorum' }, uk: { label: 'Малювати', speech: 'Я хочу малювати' }, ru: { label: 'Рисовать', speech: 'Я хочу рисовать' } } },
            { id: 'puzzle', emoji: '🧩', i18n: { de: { label: 'Puzzle', speech: 'Ich möchte Puzzle spielen' }, en: { label: 'Puzzle', speech: 'I want to do a puzzle' }, tr: { label: 'Yapboz', speech: 'Yapboz yapmak istiyorum' }, uk: { label: 'Пазл', speech: 'Я хочу скласти пазл' }, ru: { label: 'Пазл', speech: 'Я хочу собрать пазл' } } },
            { id: 'bauen', emoji: '🧱', i18n: { de: { label: 'Bauen', speech: 'Ich möchte bauen' }, en: { label: 'Build', speech: 'I want to build' }, tr: { label: 'İnşa etmek', speech: 'İnşa etmek istiyorum' }, uk: { label: 'Будувати', speech: 'Я хочу будувати' }, ru: { label: 'Строить', speech: 'Я хочу строить' } } },
            { id: 'ball-spielen', emoji: '⚽', i18n: { de: { label: 'Ball spielen', speech: 'Ich möchte Ball spielen' }, en: { label: 'Play ball', speech: 'I want to play ball' }, tr: { label: 'Top oynamak', speech: 'Top oynamak istiyorum' }, uk: { label: 'Грати в м\'яч', speech: 'Я хочу грати в м\'яч' }, ru: { label: 'Играть в мяч', speech: 'Я хочу играть в мяч' } } },
            { id: 'musik', emoji: '🎵', i18n: { de: { label: 'Musik hören', speech: 'Ich möchte Musik hören' }, en: { label: 'Listen to music', speech: 'I want to listen to music' }, tr: { label: 'Müzik dinlemek', speech: 'Müzik dinlemek istiyorum' }, uk: { label: 'Слухати музику', speech: 'Я хочу слухати музику' }, ru: { label: 'Слушать музыку', speech: 'Я хочу слушать музыку' } } },
            { id: 'lesen', emoji: '📚', i18n: { de: { label: 'Lesen', speech: 'Ich möchte lesen' }, en: { label: 'Read', speech: 'I want to read' }, tr: { label: 'Okumak', speech: 'Okumak istiyorum' }, uk: { label: 'Читати', speech: 'Я хочу читати' }, ru: { label: 'Читать', speech: 'Я хочу читать' } } },
            { id: 'fernsehen', emoji: '📺', i18n: { de: { label: 'Fernsehen', speech: 'Ich möchte fernsehen' }, en: { label: 'Watch TV', speech: 'I want to watch TV' }, tr: { label: 'TV izlemek', speech: 'TV izlemek istiyorum' }, uk: { label: 'Дивитися ТБ', speech: 'Я хочу дивитися телевізор' }, ru: { label: 'Смотреть ТВ', speech: 'Я хочу смотреть телевизор' } } },
            { id: 'brettspiel', emoji: '🎲', i18n: { de: { label: 'Brettspiel', speech: 'Ich möchte ein Brettspiel spielen' }, en: { label: 'Board game', speech: 'I want to play a board game' }, tr: { label: 'Masa oyunu', speech: 'Masa oyunu oynamak istiyorum' }, uk: { label: 'Настільна гра', speech: 'Я хочу настільну гру' }, ru: { label: 'Настольная игра', speech: 'Я хочу настольную игру' } } },
        ]
    },
    // ═══════════════ RAUS GEHEN ═══════════════
    {
        id: 'rausgehen', emoji: '🚶', color: 'teal',
        i18n: {
            de: { label: 'Raus gehen', speech: 'Ich möchte raus gehen' },
            en: { label: 'Go outside', speech: 'I want to go outside' },
            tr: { label: 'Dışarı çıkmak', speech: 'Dışarı çıkmak istiyorum' },
            uk: { label: 'На вулицю', speech: 'Я хочу вийти на вулицю' },
            ru: { label: 'На улицу', speech: 'Я хочу на улицу' },
        },
        items: [
            { id: 'spaziergang', emoji: '🚶', i18n: { de: { label: 'Spaziergang', speech: 'Ich möchte spazieren gehen' }, en: { label: 'Walk', speech: 'I want to go for a walk' }, tr: { label: 'Yürüyüş', speech: 'Yürüyüşe çıkmak istiyorum' }, uk: { label: 'Прогулянка', speech: 'Я хочу погуляти' }, ru: { label: 'Прогулка', speech: 'Я хочу погулять' } } },
            { id: 'spielplatz', emoji: '🛝', i18n: { de: { label: 'Spielplatz', speech: 'Ich möchte zum Spielplatz' }, en: { label: 'Playground', speech: 'I want to go to the playground' }, tr: { label: 'Oyun alanı', speech: 'Oyun alanına gitmek istiyorum' }, uk: { label: 'Майданчик', speech: 'Я хочу на майданчик' }, ru: { label: 'Площадка', speech: 'Я хочу на площадку' } } },
            { id: 'park', emoji: '🌳', i18n: { de: { label: 'Park', speech: 'Ich möchte in den Park' }, en: { label: 'Park', speech: 'I want to go to the park' }, tr: { label: 'Park', speech: 'Parka gitmek istiyorum' }, uk: { label: 'Парк', speech: 'Я хочу в парк' }, ru: { label: 'Парк', speech: 'Я хочу в парк' } } },
            { id: 'einkaufen', emoji: '🛒', i18n: { de: { label: 'Einkaufen', speech: 'Ich möchte einkaufen gehen' }, en: { label: 'Shopping', speech: 'I want to go shopping' }, tr: { label: 'Alışveriş', speech: 'Alışverişe gitmek istiyorum' }, uk: { label: 'За покупками', speech: 'Я хочу за покупками' }, ru: { label: 'В магазин', speech: 'Я хочу в магазин' } } },
            { id: 'autofahren', emoji: '🚗', i18n: { de: { label: 'Auto fahren', speech: 'Ich möchte Auto fahren' }, en: { label: 'Go by car', speech: 'I want to go by car' }, tr: { label: 'Araba ile gitmek', speech: 'Araba ile gitmek istiyorum' }, uk: { label: 'На авто', speech: 'Я хочу поїхати на авто' }, ru: { label: 'На машине', speech: 'Я хочу поехать на машине' } } },
            { id: 'besuch', emoji: '👋', i18n: { de: { label: 'Jemanden besuchen', speech: 'Ich möchte jemanden besuchen' }, en: { label: 'Visit someone', speech: 'I want to visit someone' }, tr: { label: 'Birini ziyaret', speech: 'Birini ziyaret etmek istiyorum' }, uk: { label: 'Відвідати когось', speech: 'Я хочу когось відвідати' }, ru: { label: 'В гости', speech: 'Я хочу в гости' } } },
        ]
    },
    // ═══════════════ TOILETTE ═══════════════
    {
        id: 'toilette', emoji: '🚽', color: 'purple',
        i18n: {
            de: { label: 'Toilette', speech: 'Ich muss auf die Toilette' },
            en: { label: 'Toilet', speech: 'I need the toilet' },
            tr: { label: 'Tuvalet', speech: 'Tuvalete gitmem gerekiyor' },
            uk: { label: 'Туалет', speech: 'Мені потрібно в туалет' },
            ru: { label: 'Туалет', speech: 'Мне нужно в туалет' },
        },
        items: [
            { id: 'toilette-gross', emoji: '🚽', i18n: { de: { label: 'Toilette', speech: 'Ich muss auf die Toilette' }, en: { label: 'Toilet', speech: 'I need the toilet' }, tr: { label: 'Tuvalet', speech: 'Tuvalete gitmem gerekiyor' }, uk: { label: 'Туалет', speech: 'Мені потрібно в туалет' }, ru: { label: 'Туалет', speech: 'Мне нужно в туалет' } } },
            { id: 'windel', emoji: '🧷', i18n: { de: { label: 'Windel wechseln', speech: 'Bitte Windel wechseln' }, en: { label: 'Change diaper', speech: 'Please change my diaper' }, tr: { label: 'Bez değiştir', speech: 'Lütfen bezimi değiştirin' }, uk: { label: 'Змінити підгузок', speech: 'Будь ласка, змініть підгузок' }, ru: { label: 'Сменить подгузник', speech: 'Пожалуйста, смените подгузник' } } },
            { id: 'hände-waschen', emoji: '🧼', i18n: { de: { label: 'Hände waschen', speech: 'Ich möchte Hände waschen' }, en: { label: 'Wash hands', speech: 'I want to wash my hands' }, tr: { label: 'El yıkamak', speech: 'Ellerimi yıkamak istiyorum' }, uk: { label: 'Помити руки', speech: 'Я хочу помити руки' }, ru: { label: 'Помыть руки', speech: 'Я хочу помыть руки' } } },
        ]
    },
    // ═══════════════ SCHLAFEN ═══════════════
    {
        id: 'schlafen', emoji: '😴', color: 'purple',
        i18n: {
            de: { label: 'Schlafen', speech: 'Ich bin müde' },
            en: { label: 'Sleep', speech: 'I am tired' },
            tr: { label: 'Uyumak', speech: 'Yorgunum' },
            uk: { label: 'Спати', speech: 'Я втомився' },
            ru: { label: 'Спать', speech: 'Я устал' },
        },
        items: [
            { id: 'müde', emoji: '🥱', i18n: { de: { label: 'Ich bin müde', speech: 'Ich bin müde' }, en: { label: 'I am tired', speech: 'I am tired' }, tr: { label: 'Yorgunum', speech: 'Yorgunum' }, uk: { label: 'Я втомився', speech: 'Я втомився' }, ru: { label: 'Я устал', speech: 'Я устал' } } },
            { id: 'schlafen-gehen', emoji: '🛏️', i18n: { de: { label: 'Schlafen gehen', speech: 'Ich möchte schlafen gehen' }, en: { label: 'Go to sleep', speech: 'I want to go to sleep' }, tr: { label: 'Uyumak', speech: 'Uyumak istiyorum' }, uk: { label: 'Лягти спати', speech: 'Я хочу лягти спати' }, ru: { label: 'Лечь спать', speech: 'Я хочу лечь спать' } } },
            { id: 'mittagsschlaf', emoji: '💤', i18n: { de: { label: 'Mittagsschlaf', speech: 'Ich möchte einen Mittagsschlaf machen' }, en: { label: 'Nap', speech: 'I want to take a nap' }, tr: { label: 'Öğle uykusu', speech: 'Öğle uykusu çekmek istiyorum' }, uk: { label: 'Денний сон', speech: 'Я хочу поспати вдень' }, ru: { label: 'Дневной сон', speech: 'Я хочу поспать днём' } } },
            { id: 'kuscheln', emoji: '🧸', i18n: { de: { label: 'Kuscheln', speech: 'Ich möchte kuscheln' }, en: { label: 'Cuddle', speech: 'I want to cuddle' }, tr: { label: 'Sarılmak', speech: 'Sarılmak istiyorum' }, uk: { label: 'Обійматися', speech: 'Я хочу обійматися' }, ru: { label: 'Обниматься', speech: 'Я хочу обниматься' } } },
        ]
    },
    // ═══════════════ GEFÜHLE ═══════════════
    {
        id: 'gefühle', emoji: '😊', color: 'yellow',
        i18n: {
            de: { label: 'Gefühle', speech: 'Ich möchte sagen wie ich mich fühle' },
            en: { label: 'Feelings', speech: 'I want to say how I feel' },
            tr: { label: 'Duygular', speech: 'Nasıl hissettiğimi söylemek istiyorum' },
            uk: { label: 'Почуття', speech: 'Я хочу сказати, як я себе почуваю' },
            ru: { label: 'Чувства', speech: 'Я хочу сказать, что я чувствую' },
        },
        items: [
            { id: 'fröhlich', emoji: '😊', i18n: { de: { label: 'Fröhlich', speech: 'Ich bin fröhlich' }, en: { label: 'Happy', speech: 'I am happy' }, tr: { label: 'Mutlu', speech: 'Mutluyum' }, uk: { label: 'Радісний', speech: 'Я радий' }, ru: { label: 'Радостный', speech: 'Я радуюсь' } } },
            { id: 'traurig', emoji: '😢', i18n: { de: { label: 'Traurig', speech: 'Ich bin traurig' }, en: { label: 'Sad', speech: 'I am sad' }, tr: { label: 'Üzgün', speech: 'Üzgünüm' }, uk: { label: 'Сумний', speech: 'Мені сумно' }, ru: { label: 'Грустный', speech: 'Мне грустно' } } },
            { id: 'wütend', emoji: '😠', i18n: { de: { label: 'Wütend', speech: 'Ich bin wütend' }, en: { label: 'Angry', speech: 'I am angry' }, tr: { label: 'Kızgın', speech: 'Kızgınım' }, uk: { label: 'Злий', speech: 'Я злий' }, ru: { label: 'Злой', speech: 'Я злюсь' } } },
            { id: 'ängstlich', emoji: '😨', i18n: { de: { label: 'Ängstlich', speech: 'Ich habe Angst' }, en: { label: 'Scared', speech: 'I am scared' }, tr: { label: 'Korkmuş', speech: 'Korkuyorum' }, uk: { label: 'Наляканий', speech: 'Мені страшно' }, ru: { label: 'Страшно', speech: 'Мне страшно' } } },
            { id: 'gelangweilt', emoji: '😐', i18n: { de: { label: 'Gelangweilt', speech: 'Mir ist langweilig' }, en: { label: 'Bored', speech: 'I am bored' }, tr: { label: 'Sıkılmış', speech: 'Sıkıldım' }, uk: { label: 'Нудно', speech: 'Мені нудно' }, ru: { label: 'Скучно', speech: 'Мне скучно' } } },
            { id: 'aufgeregt', emoji: '🤩', i18n: { de: { label: 'Aufgeregt', speech: 'Ich bin aufgeregt' }, en: { label: 'Excited', speech: 'I am excited' }, tr: { label: 'Heyecanlı', speech: 'Heyecanlıyım' }, uk: { label: 'Схвильований', speech: 'Я схвильований' }, ru: { label: 'Взволнован', speech: 'Я взволнован' } } },
            { id: 'lieb', emoji: '🥰', i18n: { de: { label: 'Ich hab dich lieb', speech: 'Ich hab dich lieb' }, en: { label: 'I love you', speech: 'I love you' }, tr: { label: 'Seni seviyorum', speech: 'Seni seviyorum' }, uk: { label: 'Я тебе люблю', speech: 'Я тебе люблю' }, ru: { label: 'Я тебя люблю', speech: 'Я тебя люблю' } } },
            { id: 'einsam', emoji: '😔', i18n: { de: { label: 'Einsam', speech: 'Ich fühle mich einsam' }, en: { label: 'Lonely', speech: 'I feel lonely' }, tr: { label: 'Yalnız', speech: 'Kendimi yalnız hissediyorum' }, uk: { label: 'Самотній', speech: 'Мені самотньо' }, ru: { label: 'Одинокий', speech: 'Мне одиноко' } } },
        ]
    },
    // ═══════════════ ANTWORTEN ═══════════════
    {
        id: 'antworten', emoji: '💬', color: 'blue',
        i18n: {
            de: { label: 'Antworten', speech: 'Ich möchte antworten' },
            en: { label: 'Answers', speech: 'I want to answer' },
            tr: { label: 'Cevaplar', speech: 'Cevap vermek istiyorum' },
            uk: { label: 'Відповіді', speech: 'Я хочу відповісти' },
            ru: { label: 'Ответы', speech: 'Я хочу ответить' },
        },
        items: [
            { id: 'ja', emoji: '✅', i18n: { de: { label: 'Ja', speech: 'Ja' }, en: { label: 'Yes', speech: 'Yes' }, tr: { label: 'Evet', speech: 'Evet' }, uk: { label: 'Так', speech: 'Так' }, ru: { label: 'Да', speech: 'Да' } } },
            { id: 'nein', emoji: '❌', i18n: { de: { label: 'Nein', speech: 'Nein' }, en: { label: 'No', speech: 'No' }, tr: { label: 'Hayır', speech: 'Hayır' }, uk: { label: 'Ні', speech: 'Ні' }, ru: { label: 'Нет', speech: 'Нет' } } },
            { id: 'danke', emoji: '🙏', i18n: { de: { label: 'Danke', speech: 'Danke' }, en: { label: 'Thank you', speech: 'Thank you' }, tr: { label: 'Teşekkürler', speech: 'Teşekkürler' }, uk: { label: 'Дякую', speech: 'Дякую' }, ru: { label: 'Спасибо', speech: 'Спасибо' } } },
            { id: 'bitte', emoji: '🙂', i18n: { de: { label: 'Bitte', speech: 'Bitte' }, en: { label: 'Please', speech: 'Please' }, tr: { label: 'Lütfen', speech: 'Lütfen' }, uk: { label: 'Будь ласка', speech: 'Будь ласка' }, ru: { label: 'Пожалуйста', speech: 'Пожалуйста' } } },
            { id: 'nochmal', emoji: '🔄', i18n: { de: { label: 'Nochmal', speech: 'Nochmal bitte' }, en: { label: 'Again', speech: 'Again please' }, tr: { label: 'Tekrar', speech: 'Tekrar lütfen' }, uk: { label: 'Ще раз', speech: 'Ще раз, будь ласка' }, ru: { label: 'Ещё раз', speech: 'Ещё раз, пожалуйста' } } },
            { id: 'warte', emoji: '⏳', i18n: { de: { label: 'Warte', speech: 'Bitte warte' }, en: { label: 'Wait', speech: 'Please wait' }, tr: { label: 'Bekle', speech: 'Lütfen bekle' }, uk: { label: 'Зачекай', speech: 'Зачекай, будь ласка' }, ru: { label: 'Подожди', speech: 'Подожди, пожалуйста' } } },
            { id: 'fertig', emoji: '✔️', i18n: { de: { label: 'Fertig', speech: 'Ich bin fertig' }, en: { label: 'Done', speech: 'I am done' }, tr: { label: 'Bitti', speech: 'Bittim' }, uk: { label: 'Готово', speech: 'Я закінчив' }, ru: { label: 'Готово', speech: 'Я закончил' } } },
            { id: 'weiss-nicht', emoji: '🤷', i18n: { de: { label: 'Weiß nicht', speech: 'Ich weiß nicht' }, en: { label: "Don't know", speech: "I don't know" }, tr: { label: 'Bilmiyorum', speech: 'Bilmiyorum' }, uk: { label: 'Не знаю', speech: 'Я не знаю' }, ru: { label: 'Не знаю', speech: 'Я не знаю' } } },
        ]
    },
    // ═══════════════ SCHMERZEN ═══════════════
    {
        id: 'schmerzen', emoji: '🤕', color: 'red',
        i18n: {
            de: { label: 'Schmerzen', speech: 'Ich habe Schmerzen' },
            en: { label: 'Pain', speech: 'I am in pain' },
            tr: { label: 'Ağrı', speech: 'Ağrım var' },
            uk: { label: 'Біль', speech: 'Мені боляче' },
            ru: { label: 'Боль', speech: 'Мне больно' },
        },
        items: [
            { id: 'kopf', emoji: '🤕', i18n: { de: { label: 'Kopf tut weh', speech: 'Mein Kopf tut weh' }, en: { label: 'Head hurts', speech: 'My head hurts' }, tr: { label: 'Başım ağrıyor', speech: 'Başım ağrıyor' }, uk: { label: 'Болить голова', speech: 'У мене болить голова' }, ru: { label: 'Болит голова', speech: 'У меня болит голова' } } },
            { id: 'bauch', emoji: '🤢', i18n: { de: { label: 'Bauch tut weh', speech: 'Mein Bauch tut weh' }, en: { label: 'Stomach hurts', speech: 'My stomach hurts' }, tr: { label: 'Karnım ağrıyor', speech: 'Karnım ağrıyor' }, uk: { label: 'Болить живіт', speech: 'У мене болить живіт' }, ru: { label: 'Болит живот', speech: 'У меня болит живот' } } },
            { id: 'arm', emoji: '💪', i18n: { de: { label: 'Arm tut weh', speech: 'Mein Arm tut weh' }, en: { label: 'Arm hurts', speech: 'My arm hurts' }, tr: { label: 'Kolum ağrıyor', speech: 'Kolum ağrıyor' }, uk: { label: 'Болить рука', speech: 'У мене болить рука' }, ru: { label: 'Болит рука', speech: 'У меня болит рука' } } },
            { id: 'bein', emoji: '🦵', i18n: { de: { label: 'Bein tut weh', speech: 'Mein Bein tut weh' }, en: { label: 'Leg hurts', speech: 'My leg hurts' }, tr: { label: 'Bacağım ağrıyor', speech: 'Bacağım ağrıyor' }, uk: { label: 'Болить нога', speech: 'У мене болить нога' }, ru: { label: 'Болит нога', speech: 'У меня болит нога' } } },
            { id: 'zahn', emoji: '🦷', i18n: { de: { label: 'Zahn tut weh', speech: 'Mein Zahn tut weh' }, en: { label: 'Tooth hurts', speech: 'My tooth hurts' }, tr: { label: 'Dişim ağrıyor', speech: 'Dişim ağrıyor' }, uk: { label: 'Болить зуб', speech: 'У мене болить зуб' }, ru: { label: 'Болит зуб', speech: 'У меня болит зуб' } } },
            { id: 'ohr', emoji: '👂', i18n: { de: { label: 'Ohr tut weh', speech: 'Mein Ohr tut weh' }, en: { label: 'Ear hurts', speech: 'My ear hurts' }, tr: { label: 'Kulağım ağrıyor', speech: 'Kulağım ağrıyor' }, uk: { label: 'Болить вухо', speech: 'У мене болить вухо' }, ru: { label: 'Болит ухо', speech: 'У меня болит ухо' } } },
            { id: 'hals', emoji: '🫁', i18n: { de: { label: 'Hals tut weh', speech: 'Mein Hals tut weh' }, en: { label: 'Throat hurts', speech: 'My throat hurts' }, tr: { label: 'Boğazım ağrıyor', speech: 'Boğazım ağrıyor' }, uk: { label: 'Болить горло', speech: 'У мене болить горло' }, ru: { label: 'Болит горло', speech: 'У меня болит горло' } } },
            { id: 'mir-ist-schlecht', emoji: '🤮', i18n: { de: { label: 'Mir ist schlecht', speech: 'Mir ist schlecht' }, en: { label: 'I feel sick', speech: 'I feel sick' }, tr: { label: 'Midem bulanıyor', speech: 'Midem bulanıyor' }, uk: { label: 'Мені погано', speech: 'Мені погано' }, ru: { label: 'Тошнит', speech: 'Меня тошнит' } } },
        ]
    },
    // ═══════════════ HILFE ═══════════════
    {
        id: 'hilfe', emoji: '🆘', color: 'red', isHelp: true,
        i18n: {
            de: { label: 'HILFE', speech: 'Ich brauche Hilfe!' },
            en: { label: 'HELP', speech: 'I need help!' },
            tr: { label: 'YARDIM', speech: 'Yardıma ihtiyacım var!' },
            uk: { label: 'ДОПОМОГА', speech: 'Мені потрібна допомога!' },
            ru: { label: 'ПОМОЩЬ', speech: 'Мне нужна помощь!' },
        },
        items: []
    },
] };
