import http from "k6/http";
import { check } from "k6";

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 100,
      timeUnit: "1s",
      duration: "100s",
      preAllocatedVUs: 10,
      maxVUs: 300,
    },
  },
};

export default function () {
  const response = http.get("http://next:3000/en-us/", {
    headers: { Accepts: "application/json" },
  });

  check(response, { "status is 200": (r) => r.status === 200 });
}
