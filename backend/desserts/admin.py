from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Dessert, Ingredient, IngredientInRecipe


class TabularRecipeIngredientAdmin(admin.TabularInline):
    model = IngredientInRecipe
    fk_name = 'dessert_parent'


@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('^name',)


class RecipeIngredientAdmin(admin.ModelAdmin):
    model = IngredientInRecipe
    fk_name = 'dessert'


@admin.register(Dessert)
class DessertAdmin(admin.ModelAdmin):
    list_display = ('name', 'text', 'short_description', 'image', 'pub_date')
    inlines = [
        TabularRecipeIngredientAdmin,
    ]


admin.site.unregister(Group)

