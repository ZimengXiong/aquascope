// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PermsDiff } from "./PermsDiff";
import type { Range } from "./Range";

export interface PermissionsStateStep {
  location: Range;
  state: Array<[string, PermsDiff]>;
}
