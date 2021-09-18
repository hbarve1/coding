/** @format */

import isValid from "./sherlock-and-valid-string";

describe("sherlock-and-valid-string", () => {
  test("Test 1", () => {
    expect(isValid("abc")).toBe("YES");
  });

  test("Test 2", () => {
    expect(isValid("abcc")).toBe("YES");
  });

  test("Test 3", () => {
    expect(isValid("abccc")).toBe("NO");
  });

  test("Test 4", () => {
    expect(isValid("aabbcd")).toBe("NO");
  });

  test("Test 5", () => {
    expect(isValid("aabbccddeefghi")).toBe("NO");
  });

  test("Test 6", () => {
    expect(isValid("abcdefghhgfedecba")).toBe("YES");
  });

  test("Test 7", () => {
    expect(
      isValid(
        "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd",
      ),
    ).toBe("YES");
  });
});
