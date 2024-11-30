*
#[test_only]
module suiverse::suiverse_tests;
//uncomment this line to import the module
 use suiverse::suiverse;

const ENotImplemented: u64 = 0;

#[test]
fun test_suiverse() {
    // pass
}

#[test, expected_failure(abort_code = ::suiverse::suiverse_tests::ENotImplemented)]
fun test_suiverse_fail() {
    abort ENotImplemented
}
*/
