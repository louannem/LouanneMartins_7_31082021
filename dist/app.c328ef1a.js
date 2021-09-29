// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/recipes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recipes = void 0;
var recipes = [{
  "id": 1,
  "name": "Limonade de Coco",
  "servings": 1,
  "ingredients": [{
    "ingredient": "Lait de coco",
    "quantity": 400,
    "unit": "ml"
  }, {
    "ingredient": "Jus de citron",
    "quantity": 2
  }, {
    "ingredient": "Crème de coco",
    "quantity": 2,
    "unit": "cuillères à soupe"
  }, {
    "ingredient": "Sucre",
    "quantite": 30,
    "unit": "grammes"
  }, {
    "ingredient": "Glaçons"
  }],
  "time": 10,
  "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
  "appliance": "Blender",
  "ustensils": ["cuillère à Soupe", "verres", "presse citron"]
}, {
  "id": 2,
  "name": "Poisson Cru à la tahitienne",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Thon Rouge (ou blanc)",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Concombre",
    "quantity": 1
  }, {
    "ingredient": "Tomate",
    "quantity": 2
  }, {
    "ingredient": "Carotte",
    "quantite": 1
  }, {
    "ingredient": "Citron Vert",
    "quantity": 5
  }, {
    "ingredient": "Lait de coco",
    "quantity": 100,
    "unit": "ml"
  }],
  "time": 60,
  "description": "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco",
  "appliance": "Saladier",
  "ustensils": ["presse citron"]
}, {
  "id": 3,
  "name": "Poulet coco réunionnais",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Poulet",
    "quantity": 1
  }, {
    "ingredient": "Lait de coco",
    "quantity": 400,
    "unit": "ml"
  }, {
    "ingredient": "Coulis de tomate",
    "quantity": 25,
    "unit": "cl"
  }, {
    "ingredient": "Oignon",
    "quantity": 1
  }, {
    "ingredient": "Poivron rouge",
    "quantity": 1
  }, {
    "ingredient": "Huile d'olive"
  }],
  "time": 80,
  "description": "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
  "appliance": "Cocotte",
  "ustensils": ["couteau"]
}, {
  "id": 4,
  "name": "Salade de riz",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Riz blanc",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Thon en miettes",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Tomate",
    "quantity": 2
  }, {
    "ingredient": "Oeuf dur",
    "quantity": 2
  }, {
    "ingredient": "Maïs",
    "quantity": 300,
    "unit": "grammes"
  }, {
    "ingredient": "Vinaigrette",
    "quantity": 5,
    "unit": "cl"
  }],
  "time": 50,
  "description": "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
  "appliance": "Cuiseur de riz",
  "ustensils": ["saladier", "passoire"]
}, {
  "id": 5,
  "name": "Tarte au thon",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Pâte feuilletée",
    "quantity": 1
  }, {
    "ingredient": "Thon en miettes",
    "quantity": 130,
    "unit": "grammes"
  }, {
    "ingredient": "Tomate",
    "quantity": 2
  }, {
    "ingredient": "Crème fraiche",
    "quantity": 2,
    "unit": "cuillères à soupe"
  }, {
    "ingredient": "gruyère râpé",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Moutarde de Dijon",
    "quantity": 1,
    "unite": "cuillères à soupe"
  }],
  "time": 45,
  "description": "Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
  "appliance": "Four",
  "ustensils": ["moule à tarte", "râpe à fromage", "couteau"]
}, {
  "id": 6,
  "name": "Tarte aux pommes",
  "servings": 6,
  "ingredients": [{
    "ingredient": "Pâte brisée",
    "quantity": 1
  }, {
    "ingredient": "Pomme",
    "quantity": 3
  }, {
    "ingredient": "Oeuf",
    "quantity": "2"
  }, {
    "ingredient": "Crème fraiche",
    "quantity": 25,
    "unit": "cl"
  }, {
    "ingredient": "Sucre en Poudre",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre vanillé",
    "quantity": 1,
    "unit": "sachets"
  }],
  "time": 50,
  "description": "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraiche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes",
  "appliance": "Four",
  "ustensils": ["moule à tarte", "saladier", "fourchette"]
}, {
  "id": 7,
  "name": "Tartelettes au chocolat et aux fraises",
  "servings": 6,
  "ingredients": [{
    "ingredient": "Pâte sablée",
    "quantity": 1
  }, {
    "ingredient": "Chocolat au lait",
    "quantity": 300,
    "unit": "grammes"
  }, {
    "ingredient": "Crème liquide",
    "quantity": 80,
    "unit": "cl"
  }, {
    "ingredient": "Beurre",
    "quantity": "30",
    "unit": "grammes"
  }, {
    "ingredient": "Fraise",
    "quantity": 6
  }],
  "time": 50,
  "description": "Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
  "appliance": "Four",
  "ustensils": ["moule à tartelettes (6)", "casserolle"]
}, {
  "id": 8,
  "name": "Brownie",
  "servings": 10,
  "ingredients": [{
    "ingredient": "Noix",
    "quantity": "180",
    "unit": "grammes"
  }, {
    "ingredient": "Chocolat noir",
    "quantity": 150,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre",
    "quantity": 120,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 2
  }, {
    "ingredient": "Sucre en Poudre",
    "quantity": "110",
    "unit": "grammes"
  }, {
    "ingredient": "farine",
    "quantity": 90,
    "unit": "grammes"
  }],
  "time": 60,
  "description": "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
  "appliance": "Four",
  "ustensils": ["moule à gateaux", "casserolle"]
}, {
  "id": 9,
  "name": "Salade Méditerannéene fraiche au chèvre",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Concombre",
    "quantity": 1
  }, {
    "ingredient": "Olives"
  }, {
    "ingredient": "Fromage de chèvre",
    "quantity": 150,
    "unit": "grammes"
  }, {
    "ingredient": "Vinaigre Balsamic"
  }, {
    "ingredient": "Huile d'olive"
  }, {
    "ingredient": "Basilic"
  }],
  "time": 15,
  "description": "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
  "appliance": "Saladier",
  "ustensils": ["cuillère en bois", "couteau"]
}, {
  "id": 10,
  "name": "Tartiflette",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Roblochon",
    "quantity": "1"
  }, {
    "ingredient": "Pommes de terre",
    "quantity": 4.5,
    "unit": "kg"
  }, {
    "ingredient": "Jambon fumé",
    "quantity": 2,
    "unit": "tranches"
  }, {
    "ingredient": "Oignon",
    "quantity": 300,
    "unit": "grammes"
  }, {
    "ingredient": "Vin blanc sec",
    "quantity": 30,
    "unit": "cl"
  }],
  "time": 60,
  "description": "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
  "appliance": "Four",
  "ustensils": ["plat à gratin", "couteau", "Économe"]
}, {
  "id": 11,
  "name": "Salade tomate, mozzarella et pommes",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Tomates cerises",
    "quantity": 250,
    "unit": "grammes"
  }, {
    "ingredient": "Mozzarella",
    "quantity": 150,
    "unit": "grammes"
  }, {
    "ingredient": "Jambon de parme",
    "quantity": 4,
    "unit": "tranches"
  }, {
    "ingredient": "Pommes",
    "quantity": 1
  }, {
    "ingredient": "Salade Verte",
    "quantity": 1
  }, {
    "ingredient": "Vinaigrette",
    "quantity": 5,
    "unit": "cl"
  }],
  "time": 10,
  "description": "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ",
  "appliance": "Saladier",
  "ustensils": ["couteau", "cuillère à melon"]
}, {
  "id": 12,
  "name": "Compote pomme rhubarbe",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Rhubarbe",
    "quantity": 160,
    "unit": "grammes"
  }, {
    "ingredient": "Pommes",
    "quantity": 8
  }, {
    "ingredient": "Sucre vanillé",
    "quantity": 6,
    "unit": "sachets"
  }, {
    "ingredient": "Eau",
    "quantity": "0.5",
    "unit": "tasses"
  }],
  "time": 40,
  "description": "Éplucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
  "appliance": "Casserole",
  "ustensils": ["couteau", "économe"]
}, {
  "id": 13,
  "name": "Salade mâchée de patates",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Mâche",
    "quantity": 60,
    "unit": "grammes"
  }, {
    "ingredient": "Pommes de terre",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Échalote",
    "quantity": 2
  }, {
    "ingredient": "Vinaigre de cidre",
    "quantity": 1,
    "unit": "cuillère à soupe"
  }, {
    "ingredient": "huile d'olive",
    "quantity": 2,
    "unit": "cuillère à soupe"
  }],
  "time": 40,
  "description": "Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
  "appliance": "Casserole",
  "ustensils": ["couteau", "saladier", "cuillère en bois"]
}, {
  "id": 14,
  "name": "Galette Bretonne Saucisse et Fromage à raclette",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Saucisse bretonne ou de toulouse",
    "quantity": 2
  }, {
    "ingredient": "Farine de blé noir",
    "quantity": 130,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 1
  }, {
    "ingredient": "Fromage à raclette",
    "quantity": 300,
    "unit": "grammes"
  }, {
    "ingredient": "Oignon",
    "quantity": 1
  }, {
    "ingredient": "Beurre",
    "quantity": 75,
    "unit": "grammes"
  }],
  "time": 100,
  "description": "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
  "appliance": "Four",
  "ustensils": ["poelle à frire", "couteau"]
}, {
  "id": 15,
  "name": "Crêpes Chocolat Banane",
  "servings": 10,
  "ingredients": [{
    "ingredient": "Oeuf",
    "quantity": 3
  }, {
    "ingredient": "Farine",
    "quantity": 250,
    "unit": "grammes"
  }, {
    "ingredient": "Lait",
    "quantity": 600,
    "unit": "ml"
  }, {
    "ingredient": "Beurre salé",
    "quantity": 30,
    "unit": "grammes"
  }, {
    "ingredient": "Chocolat au lait",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Banane",
    "quantity": 4
  }],
  "time": 60,
  "description": "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
  "appliance": "Poële à crêpe",
  "ustensils": ["saladier", "louche", "cuillère en bois"]
}, {
  "id": 16,
  "name": "Gratin de pâtes à la tomate",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Tomate",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Mozzarella",
    "quantity": 250,
    "unit": "grammes"
  }, {
    "ingredient": "Pennes",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Basilic",
    "quantity": 1,
    "unit": "tiges"
  }, {
    "ingredient": "huile d'olives",
    "quantity": 2,
    "unit": "cuillère à soupe"
  }],
  "time": 45,
  "description": "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
  "appliance": "Four",
  "ustensils": ["plat à gratin", "couteau", "râpe à fromage"]
}, {
  "id": 17,
  "name": "Smoothie à la fraise",
  "servings": 6,
  "ingredients": [{
    "ingredient": "Fraise",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Pastèque",
    "quantity": 0.5
  }, {
    "ingredient": "Jus de citron",
    "quantity": 1,
    "unit": "cuillères à soupe"
  }, {
    "ingredient": "Glaçons",
    "quantity": 8
  }, {
    "ingredient": "Menthe"
  }],
  "time": 15,
  "description": "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et déguster.",
  "appliance": "Blender",
  "ustensils": ["verres", "couteau", "presse citron"]
}, {
  "id": 18,
  "name": "Smoothie ananas et vanille",
  "servings": 5,
  "ingredients": [{
    "ingredient": "Ananas",
    "quantity": 1
  }, {
    "ingredient": "Glace à la vanille",
    "quantity": 500,
    "unit": "ml"
  }, {
    "ingredient": "Lait",
    "quantity": 50,
    "unit": "cl"
  }],
  "time": 10,
  "description": "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
  "appliance": "Blender",
  "ustensils": ["verres", "couteau"]
}, {
  "id": 19,
  "name": "Shake Banane Kiwi",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Kiwi",
    "quantity": 4
  }, {
    "ingredient": "Citron",
    "quantity": 1
  }, {
    "ingredient": "Lait",
    "quantity": 1,
    "unit": "litres"
  }, {
    "ingredient": "Sucre glace",
    "quantity": 30,
    "unit": "grammes"
  }, {
    "ingredient": "Banane",
    "quantity": 1
  }],
  "time": 0,
  "description": "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
  "appliance": "Blender",
  "ustensils": ["couteau", "verres", "presse citron"]
}, {
  "id": 20,
  "name": "Pates Carbonara",
  "servings": 5,
  "ingredients": [{
    "ingredient": "Tagliatelles",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Lardons",
    "quantity": 150,
    "unit": "grammes"
  }, {
    "ingredient": "Crème fraiche",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Parmesan",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "huile d'olive",
    "quantity": 1,
    "unit": "cuillères à soupe"
  }],
  "time": 30,
  "description": "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crême fraiche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
  "appliance": "Sauteuse",
  "ustensils": ["râpe à fromage", "cuillère en bois"]
}, {
  "id": 21,
  "name": "Spaghettis à la bolognaise",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Spaghettis",
    "quantity": 400,
    "unit": "grammes"
  }, {
    "ingredient": "Oignon",
    "quantity": 2
  }, {
    "ingredient": "Coulis de tomate",
    "quantity": 300,
    "unit": "grammes"
  }, {
    "ingredient": "Viande hachée 1% de matière grasse",
    "quantity": 400,
    "unit": "grammes"
  }, {
    "ingredient": "Vin rouge",
    "quantity": 20,
    "unit": "cl"
  }, {
    "ingredient": "Crème Fraiche",
    "quantity": 1,
    "unit": "cuillères à soupe"
  }],
  "time": 30,
  "description": "Cuisiner la viande hachée dans une poelle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraiche à la viande hachée. Serivir.",
  "appliance": "Casserole",
  "ustensils": ["Cuillère en bois", "louche", "couteau"]
}, {
  "id": 22,
  "name": "Fondant au chocolat",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Beurre",
    "quantity": 160,
    "unit": "grammes"
  }, {
    "ingredient": "Chocolat noir",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Farine",
    "quantity": 50,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 4
  }, {
    "ingredient": "Sucre",
    "quantity": 150,
    "unit": "grammes"
  }],
  "time": 30,
  "description": "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crême dessert.",
  "appliance": "Four",
  "ustensils": ["moule à gateaux", "fouet", "casserolle"]
}, {
  "id": 23,
  "name": "Quiche lorraine",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Pâte brisée",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Lardons",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre",
    "quantity": 30,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 3
  }, {
    "ingredient": "Crème Fraîche",
    "quantity": 20,
    "unit": "cl"
  }, {
    "ingredient": "Lait",
    "quantity": 20,
    "unit": "cl"
  }],
  "time": 60,
  "description": "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
  "appliance": "Four",
  "ustensils": ["moule à gateaux", "rouleau à patisserie", "fouet"]
}, {
  "id": 24,
  "name": "Salade de pâtes",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Thon en miettes",
    "quantity": 160,
    "unit": "grammes"
  }, {
    "ingredient": "Maïs",
    "quantity": 60,
    "unit": "grammes"
  }, {
    "ingredient": "Tomate",
    "quantity": 1
  }, {
    "ingredient": "Concombre",
    "quantity": 0.5
  }, {
    "ingredient": "Macaronis",
    "quantity": 300,
    "unit": "grammes"
  }, {
    "ingredient": "Mayonnaise",
    "quantity": 2,
    "unit": "cuillères à soupe"
  }],
  "time": 40,
  "description": "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
  "appliance": "Saladier",
  "ustensils": ["couteau", "cuillère en bois"]
}, {
  "id": 25,
  "name": "Cookies",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Sucre",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Farine",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Chocolat noir en pepites",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 1
  }],
  "time": 30,
  "description": "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
  "appliance": "Four",
  "ustensils": ["fouet", "saladier", "plaque de cuisson"]
}, {
  "id": 26,
  "name": "Soupe de tomates",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Tomate",
    "quantity": 6
  }, {
    "ingredient": "Pommes de terre",
    "quantity": 1
  }, {
    "ingredient": "Huile d'olives"
  }, {
    "ingredient": "Oignon",
    "quantity": 1
  }, {
    "ingredient": "Ail",
    "quantity": 1,
    "unit": "gousses"
  }],
  "time": 25,
  "description": "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
  "appliance": "Mixer",
  "ustensils": ["cocotte minute", "couteau"]
}, {
  "id": 27,
  "name": "Soupe à l'oseille",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Oseille",
    "quantity": 2
  }, {
    "ingredient": "Oeuf",
    "quantity": 1
  }, {
    "ingredient": "Crème fraîche",
    "quantity": 4,
    "unit": "cuillère à soupe"
  }, {
    "ingredient": "Vermicelles",
    "quantity": 1,
    "unit": "verres"
  }, {
    "ingredient": "Beurre salé",
    "quantity": 50,
    "unit": "grammes"
  }],
  "time": 15,
  "description": "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crême fraîche",
  "appliance": "Casserole",
  "ustensils": ["couteau", "cuillère en bois"]
}, {
  "id": 28,
  "name": "Soupe de poireaux",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Poireau",
    "quantity": 3
  }, {
    "ingredient": "Pommes de terre",
    "quantity": 400,
    "unit": "grammes"
  }, {
    "ingredient": "Oseille",
    "quantity": 75,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre",
    "quantity": 50,
    "unit": "grammes"
  }, {
    "ingredient": "Crême fraîche",
    "quantity": 10,
    "unit": "cl"
  }],
  "time": 80,
  "description": "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
  "appliance": "Mixer",
  "ustensils": ["casserolle", "couteau"]
}, {
  "id": 29,
  "name": "Houmous Express",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Pois chiches",
    "quantity": 1,
    "unit": "boites"
  }, {
    "ingredient": "Ail",
    "quantity": 1,
    "unit": "gousses"
  }, {
    "ingredient": "Citron",
    "quantity": 2
  }, {
    "ingredient": "Huile d'olive"
  }, {
    "ingredient": "Paprika"
  }],
  "time": 30,
  "description": "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
  "appliance": "Mixer",
  "ustensils": ["cuillère en bois", "presse citron"]
}, {
  "id": 30,
  "name": "Purée de pois cassés",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Pois Cassé",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Oignon",
    "quantity": 1
  }, {
    "ingredient": "Ail",
    "quantity": 2,
    "unit": "gousses"
  }],
  "time": 60,
  "description": "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
  "appliance": "Mixer",
  "ustensils": ["casserolle", "cuillère en bois"]
}, {
  "id": 31,
  "name": "Jardinière de légumes",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Carotte",
    "quantity": 2
  }, {
    "ingredient": "Pommes de terre",
    "quantity": 2
  }, {
    "ingredient": "Haricots verts",
    "quantity": 150,
    "unit": "grammes"
  }, {
    "ingredient": "Petits poids",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Lardons",
    "quantity": 150,
    "unit": "grammes"
  }],
  "time": 60,
  "description": "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
  "appliance": "Poële",
  "ustensils": ["Couteau", "économe"]
}, {
  "id": 32,
  "name": "Croque Monsieur à la dinde",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Pain de mie",
    "quantity": 8,
    "unit": "tranches"
  }, {
    "ingredient": "Blanc de dinde",
    "quantity": 4,
    "unit": "tranches"
  }, {
    "ingredient": "Emmental",
    "quantity": 8,
    "unit": "tranches"
  }, {
    "ingredient": "Gruyère",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Lait",
    "quantity": 5,
    "unit": "cl"
  }, {
    "ingredient": "Noix de muscade",
    "quantity": 1,
    "unit": "pincées"
  }],
  "time": 20,
  "description": "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
  "appliance": "Four",
  "ustensils": ["râpe à fromage", "cuillère à Soupe", "couteau"]
}, {
  "id": 33,
  "name": "Sandwich au saumon fumé",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Pain de mie",
    "quantity": 8,
    "unit": "tranches"
  }, {
    "ingredient": "Saumon Fumé",
    "quantity": 4,
    "unit": "tranches"
  }, {
    "ingredient": "Feuilles de laitue",
    "quantity": 4
  }, {
    "ingredient": "Fromage blanc",
    "quantity": 4,
    "unit": "cuillères à soupe"
  }, {
    "ingredient": "Jus de citron",
    "quantity": 1,
    "unit": "cuillères à soupe"
  }],
  "time": 5,
  "description": "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
  "appliance": "Four",
  "ustensils": ["couteau", "cuillère en bois"]
}, {
  "id": 34,
  "name": "Purée de patate douce",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Patate douce",
    "quantity": 800,
    "unit": "grammes"
  }, {
    "ingredient": "Crème fraîche",
    "quantity": 20,
    "unit": "cl"
  }, {
    "ingredient": "Huile d'olive"
  }, {
    "ingredient": "Orange",
    "quantity": 1
  }],
  "time": 25,
  "description": "Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.",
  "appliance": "Mixer",
  "ustensils": ["couteau", "économe", "cuillère en bois"]
}, {
  "id": 35,
  "name": "Purée de carottes",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Carotte",
    "quantity": 6
  }, {
    "ingredient": "Pommes de terre",
    "quantity": 1
  }, {
    "ingredient": "Beurre",
    "quantity": 20,
    "unit": "grammes"
  }, {
    "ingredient": "Crème fraîche",
    "quantity": 2,
    "unit": "cuillères à soupe"
  }, {
    "ingredient": "Cumin",
    "quantity": 1,
    "unit": "cuillères à café"
  }, {
    "ingredient": "Noix de muscade",
    "quantity": 1,
    "unit": "pincées"
  }],
  "time": 25,
  "description": "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.",
  "appliance": "Mixer",
  "ustensils": ["cocotte minute", "couteau", "cuillère en bois"]
}, {
  "id": 36,
  "name": "Lasagne Courgettes et Chèvre",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Courgette",
    "quantity": 2
  }, {
    "ingredient": "Fromage de chèvre",
    "quantity": 4
  }, {
    "ingredient": "Lait",
    "quantity": 25,
    "unit": "cl"
  }, {
    "ingredient": "Lasagnes",
    "quantity": 5,
    "unit": "feuilles"
  }, {
    "ingredient": "Gruyère",
    "quantity": 40,
    "unit": "grammes"
  }, {
    "ingredient": "Maïzena",
    "quantity": 1,
    "unit": "cuillères à soupe"
  }],
  "time": 35,
  "description": "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.",
  "appliance": "Four",
  "ustensils": ["plat à gratin", "râpe à fromage", "fouet"]
}, {
  "id": 37,
  "name": "Courgettes farcies au boeuf",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Courgette",
    "quantity": 2
  }, {
    "ingredient": "Viande hachée",
    "quantity": 600,
    "unit": "grammes"
  }, {
    "ingredient": "Huile d'olives",
    "quantity": 25,
    "unit": "cl"
  }, {
    "ingredient": "Oignon",
    "quantity": 1
  }, {
    "ingredient": "Coulis de tomates",
    "quantity": 20,
    "unit": "cl"
  }, {
    "ingredient": "Gruyère",
    "quantity": 50,
    "unit": "grammes"
  }],
  "time": 60,
  "description": "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé",
  "appliance": "Four",
  "ustensils": ["couteau", "cuillère en bois", "Poelle à frire"]
}, {
  "id": 38,
  "name": "Pain Perdu",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Pain",
    "quantity": 6,
    "unit": "tranches"
  }, {
    "ingredient": "Lait",
    "quantity": 25,
    "unit": "cl"
  }, {
    "ingredient": "Oeuf",
    "quantity": 3
  }, {
    "ingredient": "Sucre roux",
    "quantity": 75,
    "unit": "grammes"
  }],
  "time": 20,
  "description": "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir",
  "appliance": "Four",
  "ustensils": ["fouet", "bol", "Cuillère à Soupe"]
}, {
  "id": 39,
  "name": "Crumble aux pommes",
  "servings": 40,
  "ingredients": [{
    "ingredient": "Pomme",
    "quantity": 2
  }, {
    "ingredient": "Farine",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre",
    "quantity": 50,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre roux",
    "quantity": 80,
    "unit": "grammes"
  }],
  "time": 40,
  "description": "Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four",
  "appliance": "Four",
  "ustensils": ["saladier", "couteau", "fouet"]
}, {
  "id": 40,
  "name": "Limonade",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Eau",
    "quantity": 1,
    "unit": "Litres"
  }, {
    "ingredient": "Citron Vert",
    "quantity": 3
  }, {
    "ingredient": "Sucre en poudre",
    "quantity": 4,
    "unit": "cuillères à café"
  }, {
    "ingredient": "Bicarbonate",
    "quantity": 1,
    "unit": "cuillères à café"
  }],
  "time": 10,
  "description": "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.",
  "appliance": "Saladier",
  "ustensils": ["cuillère en bois"]
}, {
  "id": 41,
  "name": "Mousse au chocolat",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Oeuf",
    "quantity": 3
  }, {
    "ingredient": "Chocolat noir",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre vanillé",
    "quantity": 1,
    "unit": "sachets"
  }],
  "time": 20,
  "description": "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
  "appliance": "Casserole",
  "ustensils": ["fouet", "spatule", "verres"]
}, {
  "id": 42,
  "name": "Charlotte au poires",
  "servings": 3,
  "ingredients": [{
    "ingredient": "Chocolat",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 3
  }, {
    "ingredient": "Poires au jus",
    "quantity": 0.5,
    "unit": "boites"
  }, {
    "ingredient": "Boudoirs",
    "quantity": 15
  }],
  "time": 60,
  "description": "Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
  "appliance": "Moule à charlotte",
  "ustensils": ["saladier", "couteau", "fouet"]
}, {
  "id": 43,
  "name": "Tarte au citron",
  "servings": 6,
  "ingredients": [{
    "ingredient": "Pâte brisée",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre",
    "quantity": 150,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre fondu",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 3
  }, {
    "ingredient": "Citron"
  }],
  "time": 50,
  "description": "Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ",
  "appliance": "Four",
  "ustensils": ["rouleau à patisserie", "moule à tarte", "presse citron"]
}, {
  "id": 44,
  "name": "Crème déssert au chocolat",
  "servings": 6,
  "ingredients": [{
    "ingredient": "Lait",
    "quantity": 1,
    "unit": "litres"
  }, {
    "ingredient": "Chocolat",
    "quantity": 200,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre",
    "quantity": 50,
    "unit": "grammes"
  }, {
    "ingredient": "farine",
    "quantity": 40,
    "unit": "grammes"
  }],
  "time": 15,
  "description": "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres",
  "appliance": "Casserole",
  "ustensils": ["cuillère en bois"]
}, {
  "id": 45,
  "name": "Crème patissière",
  "servings": 8,
  "ingredients": [{
    "ingredient": "Lait",
    "quantity": 50,
    "unit": "cl"
  }, {
    "ingredient": "Oeuf",
    "quantity": 2
  }, {
    "ingredient": "Farine",
    "quantity": 30,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre",
    "quantity": 80,
    "unit": "grammes"
  }],
  "time": 30,
  "description": "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
  "appliance": "Casserole",
  "ustensils": ["fouet", "saladier"]
}, {
  "id": 46,
  "name": "Far breton",
  "servings": 6,
  "ingredients": [{
    "ingredient": "Farine",
    "quantity": 250,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre",
    "quantity": 150,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre vanillé",
    "quantity": 1,
    "unit": "sachets"
  }, {
    "ingredient": "Oeuf",
    "quantity": 4
  }, {
    "ingredient": "Lait",
    "quantity": 1,
    "unit": "litre"
  }, {
    "ingredient": "Pruneaux",
    "quantity": 100,
    "unit": "grammes"
  }],
  "time": 60,
  "description": "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
  "appliance": "Four",
  "ustensils": ["fouet", "moule", "verres"]
}, {
  "id": 47,
  "name": "Mousse au citron",
  "servings": 6,
  "ingredients": [{
    "ingredient": "Jus de citron",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Mascarpone",
    "quantity": 250,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre",
    "quantity": 100,
    "unit": "grammes"
  }, {
    "ingredient": "Crème Fraîche",
    "quantity": 20,
    "unit": "cl"
  }],
  "time": 5,
  "description": "Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
  "appliance": "Saladier",
  "ustensils": ["fouet", "verres", "cuillère en bois"]
}, {
  "id": 48,
  "name": "Pizza",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Pâte à pizza",
    "quantity": 1
  }, {
    "ingredient": "Tomates pelées",
    "quantity": 1,
    "unit": "boites"
  }, {
    "ingredient": "Lardons",
    "quantity": 1,
    "unit": "barquettes"
  }, {
    "ingredient": "Champignons de paris",
    "quantity": 1,
    "unit": "boites"
  }, {
    "ingredient": "Gruyère",
    "quantity": 200,
    "unit": "grammes"
  }],
  "time": 40,
  "description": "Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes",
  "appliance": "Four",
  "ustensils": ["rouleau à patisserie", "râpe à fromage", "couteau"]
}, {
  "id": 49,
  "name": "Smoothie tropical",
  "servings": 4,
  "ingredients": [{
    "ingredient": "Bananes",
    "quantity": 2
  }, {
    "ingredient": "Kiwis",
    "quantity": 3
  }, {
    "ingredient": "Mangue",
    "quantity": 1
  }, {
    "ingredient": "Ananas",
    "quantity": 4,
    "unit": "tranches"
  }, {
    "ingredient": "Miel",
    "quantity": 2,
    "unit": "cuillères à soupe"
  }],
  "time": 0,
  "description": "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
  "appliance": "Blender",
  "ustensils": ["couteau", "verres"]
}, {
  "id": 50,
  "name": "Frangipane",
  "servings": 2,
  "ingredients": [{
    "ingredient": "Pâte feuilletée",
    "quantity": 400,
    "unit": "grammes"
  }, {
    "ingredient": "Oeuf",
    "quantity": 6
  }, {
    "ingredient": "Poudre d'amendes",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Beurre",
    "quantity": 500,
    "unit": "grammes"
  }, {
    "ingredient": "Sucre glace",
    "quantity": 500,
    "unit": "grammes"
  }],
  "time": 60,
  "description": "Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
  "appliance": "Four",
  "ustensils": ["rouleau à patisserie", "fouet"]
}];
exports.recipes = recipes;
},{}],"components/Ingredient.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoUnitAndQuantity = exports.UnitAndQuantity = exports.NoUnit = exports.NoQuantity = exports.Ingredient = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ingredient = function Ingredient(object) {
  _classCallCheck(this, Ingredient);

  if (object.ingredient && !object.unit && !object.quantity) {
    return new NoUnitAndQuantity(object);
  } else if (!object.quantity) {
    return new NoQuantity(object);
  } else if (!object.unit) {
    return new NoUnit(object);
  } else {
    return new UnitAndQuantity(object);
  }
};

exports.Ingredient = Ingredient;

var UnitAndQuantity = /*#__PURE__*/function () {
  function UnitAndQuantity(object) {
    _classCallCheck(this, UnitAndQuantity);

    this.ingredient = object.ingredient;
    this.unit = object.unit;
    this.quantity = object.quantity;
  }

  _createClass(UnitAndQuantity, [{
    key: "displayIngredient",
    value: function displayIngredient() {
      return "\n            <li><span><strong>".concat(this.ingredient, " :</strong></span> <span>").concat(this.quantity, " ").concat(this.unit, "</span></li>\n        ");
    }
  }]);

  return UnitAndQuantity;
}();

exports.UnitAndQuantity = UnitAndQuantity;

var NoQuantity = /*#__PURE__*/function () {
  function NoQuantity(object) {
    _classCallCheck(this, NoQuantity);

    this.ingredient = object.ingredient;
    this.unit = object.unit;
  }

  _createClass(NoQuantity, [{
    key: "displayIngredient",
    value: function displayIngredient() {
      return "\n            <li><span><strong>".concat(this.ingredient, " :</strong></span> <span> ").concat(this.unit, "</span></li>\n        ");
    }
  }]);

  return NoQuantity;
}();

exports.NoQuantity = NoQuantity;

var NoUnit = /*#__PURE__*/function () {
  function NoUnit(object) {
    _classCallCheck(this, NoUnit);

    this.ingredient = object.ingredient;
    this.quantity = object.quantity;
  }

  _createClass(NoUnit, [{
    key: "displayIngredient",
    value: function displayIngredient() {
      return "\n            <li><span><strong>".concat(this.ingredient, " :</strong></span> <span> ").concat(this.quantity, "</span></li>\n        ");
    }
  }]);

  return NoUnit;
}();

exports.NoUnit = NoUnit;

var NoUnitAndQuantity = /*#__PURE__*/function () {
  function NoUnitAndQuantity(object) {
    _classCallCheck(this, NoUnitAndQuantity);

    this.ingredient = object.ingredient;
  }

  _createClass(NoUnitAndQuantity, [{
    key: "displayIngredient",
    value: function displayIngredient() {
      return "\n            <li><span><strong>".concat(this.ingredient, "</strong></li>\n        ");
    }
  }]);

  return NoUnitAndQuantity;
}();

exports.NoUnitAndQuantity = NoUnitAndQuantity;
},{}],"utils/dropdownLists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ingredientsList;

var _recipes = require("../data/recipes");

var _Ingredient = require("../components/Ingredient");

function ingredientsList() {
  var ingredientArray = [];
  var ustensilesArray = [];
  var appareilsArray = [];

  for (var i = 0; i < _recipes.recipes.length; i++) {
    //Affiche les ingradients de chaque recette
    for (var j = 0; j < _recipes.recipes[i].ingredients.length; j++) {
      var _ingredientsBlock = document.getElementById(_recipes.recipes[i].id);

      var _ingredientsList = new _Ingredient.Ingredient(_recipes.recipes[i].ingredients[j]);

      _ingredientsBlock.innerHTML += _ingredientsList.displayIngredient();
    }

    for (var _j = 0; _j < _recipes.recipes[i].ingredients.length; _j++) {
      ingredientArray.push(_recipes.recipes[i].ingredients[_j].ingredient);
    }

    for (var k = 0; k < _recipes.recipes[i].ustensils.length; k++) {
      ustensilesArray.push(_recipes.recipes[i].ustensils[k]);
    }

    appareilsArray.push(_recipes.recipes[i].appliance);
  } //Gets rid of duplicates


  var removeDupl = function removeDupl(objectsArray) {
    return objectsArray.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
  };

  var ingredientDuplicate = removeDupl(ingredientArray);
  var ustensilesDuplicate = removeDupl(ustensilesArray);
  var appareilsDuplicate = removeDupl(appareilsArray);
  var ingredientsBlock = document.getElementById('ingredients-list');
  var ustensilesBlock = document.getElementById('ustensiles-list');
  var appareilsBlock = document.getElementById('appareils-list');
  var maxUstensiles = 30;

  for (var _i = 0; _i <= maxUstensiles; _i++) {
    var ingredientsWrapper = document.createElement('span');
    var ustensilesWrapper = document.createElement('span');
    ingredientsBlock.appendChild(ingredientsWrapper);
    ustensilesBlock.appendChild(ustensilesWrapper);
    ingredientsWrapper.innerText += ingredientDuplicate[_i];
    ustensilesWrapper.innerText += ustensilesDuplicate[_i];
  }

  for (var _i2 = 0; _i2 <= 10; _i2++) {
    var appareilsWrapper = document.createElement('span');
    appareilsBlock.appendChild(appareilsWrapper);
    appareilsWrapper.innerText += appareilsDuplicate[_i2];
  }
}
},{"../data/recipes":"data/recipes.js","../components/Ingredient":"components/Ingredient.js"}],"components/listExpand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listExpand;

function listExpand() {
  var inputIngredient = document.getElementById('ingredient-input');
  var boxIngredients = document.getElementById('ingredients-expand');
  var inputAppareil = document.getElementById('appareils-input');
  var boxAppareil = document.getElementById('appareils-expand');
  var inputUsentiles = document.getElementById('ustensiles-input');
  var parentNode = document.getElementById('ustensiles-search');
  var boxUstensiles = parentNode.getElementsByTagName('div')[0]; //Fonctions à réutiliser

  var addingClass = function addingClass(paraStyle1, paraStyle2, size, paraClass1, paraClass2, classe) {
    paraStyle1.style.width = size;
    paraStyle2.style.width = size;
    paraClass1.classList.add('onclick');
    paraClass2.classList.add(classe);
  };

  var removingClass = function removingClass(paraStyle1, paraStyle2, size, paraClass1, paraClass2, classe) {
    paraStyle1.style.width = size;
    paraStyle2.style.width = size;
    paraClass1.classList.remove('onclick');
    paraClass2.classList.remove(classe);
  };

  var callFonction = function callFonction(paraEvent1, paraEvent2, fonction) {
    paraEvent1.addEventListener('click', fonction);
    paraEvent2.addEventListener('click', fonction);
  }; //Fonctions pour les dropdowns


  var searchIngredient = function searchIngredient() {
    var searchWrapper = document.getElementById('ingredients-search');
    var listWrapper = document.getElementById('ingredients-list');

    if (searchWrapper.classList.contains('show')) {
      removingClass(searchWrapper, listWrapper, "170px", inputIngredient, listWrapper, "grid-list");
      inputIngredient.setAttribute('placeholder', 'Ingrédient');
    } else {
      addingClass(searchWrapper, listWrapper, "500px", inputIngredient, listWrapper, "grid-list");
      inputIngredient.setAttribute('placeholder', 'Rechercher un ingrédient');
    }
  };

  callFonction(inputIngredient, boxIngredients, searchIngredient);

  var searchAppareils = function searchAppareils() {
    var searchWrapper = document.getElementById('appareils-search');
    var listWrapper = document.getElementById('appareils-list');

    if (searchWrapper.classList.contains('show')) {
      removingClass(searchWrapper, listWrapper, "170px", inputAppareil, listWrapper, "grid-list-appareils");
      inputAppareil.setAttribute('placeholder', 'Appareils');
    } else {
      inputAppareil.setAttribute('placeholder', 'Rechercher un appareil');
      addingClass(searchWrapper, listWrapper, "500px", inputAppareil, listWrapper, "grid-list-appareils");
    }
  };

  callFonction(inputAppareil, boxAppareil, searchAppareils);

  var searchUstensiles = function searchUstensiles() {
    var searchWrapper = document.getElementById('ustensiles-search');
    var listWrapper = document.getElementById('ustensiles-list');

    if (searchWrapper.classList.contains('show')) {
      removingClass(searchWrapper, listWrapper, "170px", inputUsentiles, listWrapper, "grid-list");
      inputUsentiles.setAttribute('placeholder', 'Ustensiles');
    } else {
      addingClass(searchWrapper, listWrapper, "500px", inputUsentiles, listWrapper, "grid-list");
      inputUsentiles.setAttribute('placeholder', 'Rechercher un ustensile');
    }
  };

  callFonction(inputUsentiles, boxUstensiles, searchUstensiles); //Closes the others dropdowns if another one is open

  var dropdownElem = document.querySelectorAll('.dropdown-toggle');
  dropdownElem.forEach(function (element) {
    element.addEventListener('click', function () {
      var appareilExp = boxAppareil.getAttribute('aria-expanded'),
          ustExp = boxUstensiles.getAttribute('aria-expanded'),
          ingrExp = boxIngredients.getAttribute('aria-expanded'); //Si l'élément ouvert est en true et le nouvel élément cliqué es encore sur false
      //On cache la liste et on agrandi/réduit les dropdown

      if (appareilExp == "true" && element.getAttribute('aria-expanded') == "false") {
        boxAppareil.nextElementSibling.classList.remove('show');
        searchAppareils();
      } else if (ingrExp == "true" && element.getAttribute('aria-expanded') == "false") {
        boxIngredients.nextElementSibling.classList.remove('show');
        searchIngredient();
      } else if (ustExp == "true" && element.getAttribute('aria-expanded') == "false") {
        boxUstensiles.nextElementSibling.classList.remove('show');
        searchUstensiles();
      }
    });
  });
}
},{}],"components/Recipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recipe = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Recipe = /*#__PURE__*/function () {
  function Recipe(object) {
    _classCallCheck(this, Recipe);

    this.name = object.name;
    this.time = object.time;
    this.description = object.description;
    this.id = object.id;
    this.ingredients = object.ingredients;
    this.appliance = object.appliance;
    this.ustensils = object.ustensils;
  }

  _createClass(Recipe, [{
    key: "diplayRecipe",
    value: function diplayRecipe() {
      return "\n        <article class=\"recipe__card\" id=\"recipe-".concat(this.id, "\">\n                <div class=\"recipe__image\">\n                    <img src=\"\" alt=\"\">\n                </div>\n                <div class=\"recipe__info\">\n                    <div class=\"recipe__title\">\n                        <h2>").concat(this.name, "</h2>\n                        <div class=\"recipe__time\">\n                            <img src=\"../dist/clock.bdc9bc77.svg\" alt=\"\">\n                            <span>").concat(this.time, " min.</span>\n                        </div>\n                    </div>\n                    <div class=\"recipe__meta\">\n                        <div class=\"ingredients\">\n                           <ul id=\"").concat(this.id, "\">\n                           </ul>\n                        </div>\n                        <div class=\"instructions\">\n                            <p>").concat(this.description, "</p>\n                        </div>\n                    </div>\n                </div>\n            </article>\n        ");
    }
  }]);

  return Recipe;
}();

exports.Recipe = Recipe;
},{}],"utils/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchFunction;
exports.resultsArray = void 0;

var _recipes2 = require("../data/recipes");

var _Recipe = require("../components/Recipe");

var _dropdownLists = _interopRequireDefault(require("./dropdownLists"));

var _Ingredient = require("../components/Ingredient");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var resultsArray = [];
exports.resultsArray = resultsArray;

function searchFunction() {
  var recipesList = [];
  var recipesArray = [];

  var displayDefault = function displayDefault() {
    for (var i = 0; i < _recipes2.recipes.length; i++) {
      //Displays the recipes
      recipesList = new _Recipe.Recipe(_recipes2.recipes[i]);
      recipesArray.push(recipesList);
      document.getElementById('search-results').innerHTML += recipesList.diplayRecipe();
    }
  };

  displayDefault();
  var input = document.getElementById('search-input');
  var recipesSearch = [];

  for (var i = 0; i < _recipes2.recipes.length; i++) {
    recipesSearch.push(_recipes2.recipes[i]);
  }

  input.addEventListener('keyup', function () {
    var searchInput = input.value.toLowerCase();
    var filteredObjt = recipesSearch.filter(function (recipe) {
      return recipe.name.toLowerCase().includes(searchInput) || recipe.description.toLowerCase().includes(searchInput);
    });

    var _iterator = _createForOfIteratorHelper(filteredObjt),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _recipes = _step.value;
        resultsArray.push(_recipes);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    for (var _i = 0; _i < _recipes2.recipes.length; _i++) {
      for (var j = 0; j < filteredObjt.length; j++) {
        //resultsArray.push(filteredObjt[i]);
        if (_recipes2.recipes[_i].id == filteredObjt[j].id) {
          displayRecipes(filteredObjt); //Display the ingredients for each recipes found

          for (var _i2 = 0; _i2 < filteredObjt.length; _i2++) {
            var ingredientsBlock = document.getElementById(filteredObjt[_i2].id);

            for (var _j = 0; _j < filteredObjt[_i2].ingredients.length; _j++) {
              var _ingredientsList = new _Ingredient.Ingredient(filteredObjt[_i2].ingredients[_j]);

              ingredientsBlock.innerHTML += _ingredientsList.displayIngredient();
            }
          }
        } else {
          /*document.getElementById("recipe-"+recipes[i].id).style.display="";*/
        }
      }
    }

    return resultsArray;
  });

  var displayRecipes = function displayRecipes(recipes) {
    var htmlString = recipes.map(function (recipe) {
      return "\n                <article class=\"recipe__card\" id=\"recipe-".concat(recipe.id, "\">\n                <div class=\"recipe__image\">\n                    <img src=\"\" alt=\"\">\n                </div>\n                <div class=\"recipe__info\">\n                    <div class=\"recipe__title\">\n                        <h2>").concat(recipe.name, "</h2>\n                        <div class=\"recipe__time\">\n                            <img src=\"../dist/clock.bdc9bc77.svg\" alt=\"\">\n                            <span>").concat(recipe.time, " min.</span>\n                        </div>\n                    </div>\n                    <div class=\"recipe__meta\">\n                        <div class=\"ingredients\">\n                           <ul id=\"").concat(recipe.id, "\">\n                           </ul>\n                        </div>\n                        <div class=\"instructions\">\n                            <p>").concat(recipe.description, "</p>\n                        </div>\n                    </div>\n                </div>\n            </article>\n            ");
    }).join('');
    document.getElementById('search-results').innerHTML = htmlString;
  };

  var ingredientInput = document.getElementById('ingredient-input');
  var appareilsInput = document.getElementById('appareils-input'); //Filter each list

  var filterList = function filterList(input, listID) {
    var searchInput, ustensilesList, ElementSpan, text;
    searchInput = input.value.toLowerCase();
    ustensilesList = document.getElementById(listID);
    ElementSpan = ustensilesList.getElementsByTagName('span');

    for (var _i3 = 0; _i3 < ElementSpan.length; _i3++) {
      text = ElementSpan[_i3].innerText.toLowerCase() || ElementSpan[_i3].textContent.toLowerCase();

      if (text.indexOf(searchInput) > -1) {
        ElementSpan[_i3].style.display = "";
      } else {
        ElementSpan[_i3].style.display = "none";
      }
    }
  }; //Filter results arrays


  var arrayFilter = function arrayFilter(arrayName) {
    for (var _i4 = 0; _i4 < arrayName.length; _i4++) {
      for (var j = 0; j < arrayName.length; j++) {
        if (arrayName[_i4].name == arrayName[j].name && _i4 != j) {
          arrayName.splice(_i4, _i4 + 1);
        }
      }
    }
  };

  var ingredientsArray = [];

  var ingredientsSearch = function ingredientsSearch() {
    filterList(ingredientInput, 'ingredients-list');
    arrayFilter(ingredientsArray);
  };

  ingredientInput.addEventListener('input', ingredientsSearch);
  var appareilsArray = [];

  var appareilsSearch = function appareilsSearch() {
    filterList(appareilsInput, 'appareils-list');

    for (var j = 0; j < _recipes2.recipes.length; j++) {
      var applianceTest = _recipes2.recipes[j].appliance.toLowerCase();

      var searchInput = appareilsInput.value.toLowerCase();
      var filteredRecipe = void 0;

      if (applianceTest.includes(searchInput)) {
        filteredRecipe = new _Recipe.Recipe(_recipes2.recipes[j]);
        appareilsArray.push(filteredRecipe);
      } else {}
    }

    arrayFilter(appareilsArray);
    console.log("Appareils : ", appareilsArray);
  };

  appareilsInput.addEventListener('input', appareilsSearch);
  var ustensilesArray = [];
  var ustensilesInput = document.getElementById('ustensiles-input');

  var ustensilesSearch = function ustensilesSearch() {
    filterList(ustensilesInput, 'ustensiles-list');

    for (var j = 0; j < _recipes2.recipes.length; j++) {
      for (var k = 0; k < _recipes2.recipes[j].ustensils.length; k++) {
        if (ustensilesInput.length == 0) {
          ustensilesArray = [];
        } else {
          var ustensilesTest = _recipes2.recipes[j].ustensils[k].toLowerCase();

          var searchInput = ustensilesInput.value.toLowerCase();

          if (ustensilesTest.includes(searchInput)) {
            var filteredRecipes = new _Recipe.Recipe(_recipes2.recipes[j]);
            ustensilesArray.push(filteredRecipes);
          } else {}
        }
      }
    }
  };

  ustensilesInput.addEventListener('input', ustensilesSearch);
}
},{"../data/recipes":"data/recipes.js","../components/Recipe":"components/Recipe.js","./dropdownLists":"utils/dropdownLists.js","../components/Ingredient":"components/Ingredient.js"}],"utils/clearPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearPage;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function clearPage() {
  var toRemove = document.querySelectorAll('article');

  var _iterator = _createForOfIteratorHelper(toRemove),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var article = _step.value;
      article.remove();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
},{}],"utils/addRecipes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addRecipes;

var _Ingredient = require("../components/Ingredient");

var _filters = _interopRequireDefault(require("./filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function addRecipes(recipes) {
  var displayRecipes = function displayRecipes() {
    var htmlString = recipes.map(function (recipe) {
      return "\n                <article class=\"recipe__card\" id=\"recipe-".concat(recipe.id, "\">\n                <div class=\"recipe__image\">\n                    <img src=\"\" alt=\"\">\n                </div>\n                <div class=\"recipe__info\">\n                    <div class=\"recipe__title\">\n                        <h2>").concat(recipe.name, "</h2>\n                        <div class=\"recipe__time\">\n                            <img src=\"../dist/clock.bdc9bc77.svg\" alt=\"\">\n                            <span>").concat(recipe.time, " min.</span>\n                        </div>\n                    </div>\n                    <div class=\"recipe__meta\">\n                        <div class=\"ingredients\">\n                        <ul id=\"").concat(recipe.id, "\">\n                        </ul>\n                        </div>\n                        <div class=\"instructions\">\n                            <p>").concat(recipe.description, "</p>\n                        </div>\n                    </div>\n                </div>\n            </article>\n            ");
    }).join('');
    document.getElementById('search-results').innerHTML = htmlString;
  };

  displayRecipes();

  var addIngredients = function addIngredients() {
    //Display the ingredients for each recipes found
    for (var i = 0; i < recipes.length; i++) {
      var ingredientsBlock = document.getElementById(recipes[i].id);

      for (var j = 0; j < recipes[i].ingredients.length; j++) {
        var ingredientsList = new _Ingredient.Ingredient(recipes[i].ingredients[j]);
        ingredientsBlock.innerHTML += ingredientsList.displayIngredient();
      }
    }
  };

  addIngredients();

  var updateDropdowns = function updateDropdowns() {
    var ingrList = [];
    var appList = [];
    var ustList = []; //Récupère les listes mises à jour

    for (var i = 0; i < recipes.length; i++) {
      appList.push(recipes[i].appliance);

      for (var j = 0; j < recipes[i].ingredients.length; j++) {
        ingrList.push(recipes[i].ingredients[j].ingredient);
      }

      for (var k = 0; k < recipes[i].ustensils.length; k++) {
        ustList.push(recipes[i].ustensils[k]);
      }
    }

    var removeDupl = function removeDupl(list) {
      return list.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
    };

    var ingrDupl = removeDupl(ingrList);
    var appDupl = removeDupl(appList);
    var ustDupl = removeDupl(ustList); //Supprime les anciennes listes

    var oldLst = document.querySelectorAll('.dropdown-menu  span');

    var _iterator = _createForOfIteratorHelper(oldLst),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var list = _step.value;
        list.style.display = "none";
      } //Réinjecte les listes

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var newList = function newList(list, parentId) {
      var _iterator2 = _createForOfIteratorHelper(list),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var elem = _step2.value;
          var parentBlock = document.getElementById(parentId);
          var spanWrapper = document.createElement('span');
          parentBlock.appendChild(spanWrapper);
          spanWrapper.innerText += elem;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };

    newList(ingrDupl, 'ingredients-list');
    newList(appDupl, 'appareils-list', newList(ustDupl, 'ustensiles-list')); //Ré-applique la fonction de filtre

    (0, _filters.default)();
  };

  updateDropdowns();
}
},{"../components/Ingredient":"components/Ingredient.js","./filters":"utils/filters.js"}],"utils/removeTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTag;

var _recipes = require("../data/recipes");

var _filters = require("./filters");

var _addRecipes = _interopRequireDefault(require("../utils/addRecipes"));

var _clearPage = _interopRequireDefault(require("../utils/clearPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Importation des listes générées par les filtres
function removeTag(listName) {
  var _loop = function _loop(i) {
    //Supprime les tags
    listName[i].addEventListener('click', function () {
      //Trouver l'élément dans la liste de filtres
      for (var j = 0; j < _filters.filtersArray.length; j++) {
        //Identifie le filtre dans la liste de filtre et le supprime
        if (listName[i].innerText == _filters.filtersArray[j]) {
          _filters.filtersArray.splice(j, 1);
        } //Si la liste = 0, on re-met toutes les recettes à partir de l'input


        if (_filters.filtersArray.length == 0) {
          (function () {
            (0, _clearPage.default)();
            var recipesSearch = [];

            for (var _i = 0; _i < _recipes.recipes.length; _i++) {
              recipesSearch.push(_recipes.recipes[_i]);
            }

            var search = document.getElementById('search-input').value.toLowerCase();
            var filteredObjt = recipesSearch.filter(function (recipe) {
              return recipe.name.toLowerCase().includes(search) || recipe.description.toLowerCase().includes(search);
            });
            (0, _addRecipes.default)(filteredObjt);
            (0, _addRecipes.default)(filteredObjt);
          })();
        } else {
          console.log(_filters.tagList); //Sinon on re-filtre avec la liste   
        }
      } //Supprime le tag cliqué


      listName[i].remove();
    });
  };

  //Récupère la liste de tags
  for (var i = 0; i < listName.length; i++) {
    _loop(i);
  }
}
},{"../data/recipes":"data/recipes.js","./filters":"utils/filters.js","../utils/addRecipes":"utils/addRecipes.js","../utils/clearPage":"utils/clearPage.js"}],"assets/delete_icon.png":[function(require,module,exports) {
module.exports = "/delete_icon.04ec1ce2.png";
},{}],"utils/filters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterFunction;
exports.filtersArray = exports.tagList = exports.ingredientsOnly2 = void 0;

var _recipes = require("../data/recipes");

var _search = require("../utils/search");

var _clearPage = _interopRequireDefault(require("../utils/clearPage"));

var _addRecipes = _interopRequireDefault(require("../utils/addRecipes"));

var _removeTag = _interopRequireDefault(require("../utils/removeTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ingredientsOnly2 = [],
    tagList,
    filtersArray = [];
exports.filtersArray = filtersArray;
exports.tagList = tagList;
exports.ingredientsOnly2 = ingredientsOnly2;

function filterFunction() {
  var tags = document.querySelectorAll('.dropdown-menu span');
  var ingredientsArray = [];
  var appareilsArray = [];
  var ustensilsArray = []; //Crée les listes comparatives pour ajouter les filtres séparemment

  for (var j = 0; j < _recipes.recipes.length; j++) {
    for (var k = 0; k < _recipes.recipes[j].ingredients.length; k++) {
      ingredientsArray.push(_recipes.recipes[j].ingredients[k].ingredient);
    }

    for (var _k = 0; _k < _recipes.recipes[j].appliance.length; _k++) {
      appareilsArray.push(_recipes.recipes[j].appliance);
    }

    for (var _k2 = 0; _k2 < _recipes.recipes[j].ustensils.length; _k2++) {
      ustensilsArray.push(_recipes.recipes[j].ustensils[_k2]);
    }
  }

  var _loop = function _loop(i) {
    var addTag = function addTag() {
      //Listes de filtres par catégorie
      var ingredientsFilters = [];
      var ustensilsFilters = [];
      var appliancesFilters = []; //Filtre les doublons des résultats de recherche

      var filteredRecipe = _search.resultsArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      }); //Adds the new tag 


      var newTag = document.createElement('span');
      newTag.classList.add('added-tag');
      newTag.innerText = tags[i].innerText;
      document.getElementById('added-tags').appendChild(newTag);
      var addedTags = document.querySelectorAll('.added-tag');
      exports.tagList = tagList = document.getElementsByClassName('added-tag'); //Adds icon

      var deleteIcon = document.createElement('img');

      var _iterator = _createForOfIteratorHelper(addedTags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          tag.appendChild(deleteIcon);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;

      var iconPath = require('../assets/delete_icon.png');

      deleteIcon.setAttribute('src', iconPath); //Ajout des classes personnalisées

      for (var _i = 0; _i < _recipes.recipes.length; _i++) {
        for (var _j = 0; _j < _recipes.recipes[_i].ingredients.length; _j++) {
          if (_recipes.recipes[_i].ingredients[_j].ingredient == newTag.textContent) {
            newTag.classList.add('ingredient-tag');
          }
        }

        for (var _k3 = 0; _k3 < _recipes.recipes[_i].ustensils.length; _k3++) {
          if (_recipes.recipes[_i].ustensils[_k3] == newTag.textContent) {
            newTag.classList.add('ustentil-tag');
          }
        }

        for (var l = 0; l < _recipes.recipes[_i].appliance.length; l++) {
          if (_recipes.recipes[_i].appliance == newTag.textContent) {
            newTag.classList.add('appliance-tag');
          }
        }
      } //Ajout des tags dans chaque liste de filtre


      var _iterator2 = _createForOfIteratorHelper(addedTags),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _tag = _step2.value;
          var tagName = _tag.innerText;

          if (!ingredientsFilters.includes(tagName) && ingredientsArray.includes(tagName)) {
            ingredientsFilters.push(tagName);
            filtersArray.push(tagName);
          }

          if (!ustensilsFilters.includes(tagName) && ustensilsArray.includes(tagName)) {
            ustensilsFilters.push(tagName);
            filtersArray.push(tagName);
          }

          if (!appliancesFilters.includes(tagName) && appareilsArray.includes(tagName)) {
            appliancesFilters.push(tagName);
            filtersArray.push(tagName);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var ifEmpty = function ifEmpty(arrayName) {
        var noResult = document.getElementById('no-result');

        if (arrayName.length == 0) {
          noResult.innerText = "Pas de recette trouvée.";
          noResult.style.display = "inline";
        } else if (arrayName.length > 0) {
          noResult.style.display = "none";
        }
      }; //Filtre les résultats selon les nouvelles listes de filtres
      //Départ avant l'ajout d'un tag : toutes les listes de filtres sont vides
      ///////////////////Filtre avec liste unique////////////////////////////////////////////////////////////


      if (filtersArray.length > 0) {
        var filterAll = filteredRecipe.filter(function (recipe) {
          return recipe.ingredients.some(function (ingredients) {
            return filtersArray.every(function (tag) {
              return tag == ingredients.ingredient;
            });
          }) || recipe.ustensils.some(function (ustensils) {
            return filtersArray.every(function (tag) {
              return tag == ustensils;
            });
          }) || filtersArray.every(function (tag) {
            return tag == recipe.appliance;
          });
        });
        (0, _clearPage.default)(filterAll);
        (0, _addRecipes.default)(filterAll);
        (0, _addRecipes.default)(filterAll);
        (0, _addRecipes.default)(filterAll);
        ifEmpty(filterAll);
      } ///////////////////////Filtres avec listes séparées/////////////////////////////////////////////////////////////
      //Cas 1 : si appareils et ustensils sont vide, on teste les ingrédients

      /*   if(appliancesFilters.length == 0 && ustensilsFilters.length == 0) {
          let ingredientsOnly = filteredRecipe.filter((recipe) => {
              return recipe.ingredients.some((ingredients) => {
                   return filtersArray.every((tag) => {
                       if(tag == ingredients.ingredient) { ingredientsOnly2.push(recipe)}
                       return tag == ingredients.ingredient
                   })
               })            
          });        
          clearPage(ingredientsOnly); addRecipes(ingredientsOnly); addIngredients(ingredientsOnly); updateDropdowns(ingredientsOnly); ifEmpty(ingredientsOnly)
         } 
           //Cas 2 : si ingrédients et appareils sont vides, on teste les ustensiles
         else if(ingredientsFilters.length == 0 && appliancesFilters.length ==0) {
          let ustensilsOnly = filteredRecipe.filter((recipe) => {
              return recipe.ustensils.some((ustensils) => {
                   return filtersArray.some((tag) => {
                       return tag == ustensils
                   })
               })
          
          });  
          clearPage(ustensilsOnly);   addRecipes(ustensilsOnly); addIngredients(ustensilsOnly); updateDropdowns(ustensilsOnly) ;ifEmpty(ustensilsOnly);
         } 
             //Cas 3 : si ingrédients et ustensils sont vides, on teste les appareils
         else if(ingredientsFilters.length == 0 && ustensilsFilters.length == 0) {
          const appliancesOnly = filteredRecipe.filter((recipe) => {
              return filtersArray.every((tag) => {
                return tag === recipe.appliance 
              });
            });
          clearPage(appliancesOnly); addRecipes(appliancesOnly); addIngredients(appliancesOnly);  //ifEmpty(appliancesOnly);
         }
           //Cas 4 : si ingrédients est vide, on teste les appareils et ustensils
         else if(ingredientsFilters.length == 0) {
          const appAndUst = filteredRecipe.filter((recipe) => {
              return(
                  recipe.ustensils.some(ustensils => {
                      return filtersArray.some(tag => {
                          return ustensils == tag
                      })
                  }) &&
                  filtersArray.some(tag => {
                      return recipe.appliance == tag
                  })
              )
          });
          clearPage(appAndUst); addRecipes(appAndUst); addIngredients(appAndUst); updateDropdowns(appAndUst); ifEmpty(appAndUst);
         }
      
           //Cas 5 : si appareils est vide, on teste les ingrédients et les ustensils
         else if (appliancesFilters.length == 0) {
          const ustpAndIngr = filteredRecipe.filter((recipe) => {
              return(
                  recipe.ingredients.some(ingredients => {
                      return filtersArray.some(tag => {
                          return ingredients.ingredient == tag
                      })
                  }) &&
                  recipe.ustensils.some(ustensils => {
                      return filtersArray.some(tag => {
                          return ustensils == tag
                      })
                  })
              )
          });
            clearPage(ustpAndIngr); addRecipes(ustpAndIngr); addIngredients(ustpAndIngr); updateDropdowns(ustpAndIngr); ifEmpty(ustpAndIngr);
         }
         
           //Cas 6 : si ustensils est vide, on teste les ingrédients et les appareils
         else if(ustensilsFilters.length == 0) {
             const ingrAndApp = filteredRecipe.filter((recipe) => {
                 return(
                  recipe.ingredients.some(ingredients => {
                      return filtersArray.some(tag => {
                          return ingredients.ingredient.includes(tag)
                      })
                  }) &&
                  filtersArray.some((tag) => {
                      return tag == recipe.appliance
                  })
                 )
             })
                clearPage(ingrAndApp); addRecipes(ingrAndApp); addIngredients(ingrAndApp); updateDropdowns(ingrAndApp); ifEmpty(ingrAndApp);
         }
             //Cas 7 : aucune liste n'est vide
         else if (ingredientsFilters.length > 0 && appliancesFilters > 0 && ustensilsFilters > 0) {
          const filterAll = filteredRecipe.filter((recipe) => {
              return (recipe.ingredients.some((ingredients) => {
                  return filtersArray.some((tag) => {
                      return tag == ingredients.ingredient
                  })
              }) ||
              recipe.ustensils.some((ustensils) => {
                  return filtersArray.some((tag) => {
                      return tag == ustensils
                  })
              }) ||
              filtersArray.some((tag) => {
                  return tag == recipe.appliance
              })
              )
          })
          clearPage(filterAll); addRecipes(filterAll); addIngredients(filterAll); updateDropdowns(filterAll); ifEmpty(filterAll);
         }    */


      (0, _removeTag.default)(tagList);
    };

    tags[i].addEventListener('click', addTag);
  };

  for (var i = 0; i < tags.length; i++) {
    _loop(i);
  }
}
},{"../data/recipes":"data/recipes.js","../utils/search":"utils/search.js","../utils/clearPage":"utils/clearPage.js","../utils/addRecipes":"utils/addRecipes.js","../utils/removeTag":"utils/removeTag.js","../assets/delete_icon.png":"assets/delete_icon.png"}],"app.js":[function(require,module,exports) {
"use strict";

var _dropdownLists = _interopRequireDefault(require("./utils/dropdownLists"));

var _listExpand = _interopRequireDefault(require("./components/listExpand"));

var _search = _interopRequireDefault(require("./utils/search"));

var _filters = _interopRequireDefault(require("./utils/filters"));

var _removeTag = _interopRequireDefault(require("./utils/removeTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  (0, _search.default)();
  (0, _dropdownLists.default)();
  (0, _listExpand.default)();
  (0, _filters.default)();
  (0, _removeTag.default)();
};

init();
},{"./utils/dropdownLists":"utils/dropdownLists.js","./components/listExpand":"components/listExpand.js","./utils/search":"utils/search.js","./utils/filters":"utils/filters.js","./utils/removeTag":"utils/removeTag.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58359" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map