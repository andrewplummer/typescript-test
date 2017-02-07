//  Note: the purpose of this repo is to created TS declares that will describe an
//  object that works like the following:
//
//  1)
//  var pkg = require('pkg');
//  pkg();              // global can be called
//  pkg.core_method();  // core method on global can be called
//  pkg.foo();          // namespace can be called off the global
//  pkg.foo.method();  // method can be called off the namespace
//
//  2)
//  var pkg = require('pkg/foo');
//  pkg();              // global can be called
//  pkg.foo();          // namespace can be called off the global
//  pkg.foo.method();  // method can be called off the namespace
//
//  3)
//  var foo_method = require('pkg/foo/method1');
//  foo_method();   // method is called individually
//
//
//  1) and 2) are identical except that 1) potentially may require other
//  submodules that will be available, where 2) will only augment "pkg"
//  with the "foo" submodule.

import * as pkg from 'pkg';

pkg();
pkg.core_method();
pkg.foo();
pkg.foo.method();

import * as root from 'pkg/foo';

root();
root.core_method();
root.foo();
root.foo.method();

import method = require('pkg/foo/method');

method();
