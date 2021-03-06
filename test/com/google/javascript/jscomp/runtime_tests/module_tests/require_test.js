/*
 * Copyright 2016 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import s from './module_test_resources/exportDefault.js';

const {assertInstanceof} = goog.require('goog.asserts');
const EventHandler = goog.require('goog.events.EventHandler');

// Just check to make sure the goog.require worked and the required class can
// be used.
function testRequire() {
  assertEquals(s, s); // This is used to avoid the extra require warning
  var eh = new EventHandler();
  assertInstanceof(eh, EventHandler);
}
