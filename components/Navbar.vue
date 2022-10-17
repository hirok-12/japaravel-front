<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NuxtLink
          class="navbar-brand"
          to="/"
        >
          KikuChannel
        </NuxtLink>
        <div
          id="navbarNavAltMarkup"
          class="collapse navbar-collapse"
        >
          <div class="navbar-nav">
            <NuxtLink
              class="nav-link"
              active-class="active"
              aria-current="page"
              to="/"
            >
              Home
            </NuxtLink>
            <NuxtLink
              class="nav-link"
              active-class="active"
              to="/secondpage"
            >
              Secondpage
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
