from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class MaternityMonthlyRecord(models.Model):
    month_name = models.CharField(max_length=15)
    beds_available = models.PositiveSmallIntegerField()
    bed_days = models.PositiveSmallIntegerField()
    patient_days = models.PositiveSmallIntegerField()
    hospitalized = models.PositiveSmallIntegerField()
    discharged_alive = models.PositiveSmallIntegerField()
    died_before_48h = models.PositiveSmallIntegerField()
    died_after_48h = models.PositiveSmallIntegerField()
    days_hospitalised = models.PositiveSmallIntegerField()
    died_after_48h = models.PositiveSmallIntegerField()
    referrals = models.PositiveSmallIntegerField()
    transfers = models.PositiveSmallIntegerField()
    self_discharged = models.PositiveSmallIntegerField()
    stayed_in_ward = models.PositiveSmallIntegerField()
    admissions = models.PositiveSmallIntegerField()

    #BIRTHS SECTION
    birth_weight_less_one_normal = models.PositiveSmallIntegerField()
    birth_weight_less_one_cesarean = models.PositiveSmallIntegerField()
    birth_weight_less_one_instrumentals = models.PositiveSmallIntegerField()
    birth_weight_between_one_and_two_normal = models.PositiveSmallIntegerField()
    birth_weight_between_one_and_two_cesarean = models.PositiveSmallIntegerField()
    birth_weight_between_one_and_two_instrumentals = models.PositiveSmallIntegerField()
    birth_weight_more_than_two_normal = models.PositiveSmallIntegerField()
    birth_weight_more_than_two_cesarean = models.PositiveSmallIntegerField()
    birth_weight_more_than_two_instrumentals = models.PositiveSmallIntegerField()
    birth_weight_not_weighed_normal = models.PositiveSmallIntegerField()
    birth_weight_not_weighed_cesarean = models.PositiveSmallIntegerField()
    birth_weight_not_weighed_instrumentals = models.PositiveSmallIntegerField()
    birth_immedietly_breatfed_normal = models.PositiveSmallIntegerField()
    birth_immedietly_breatfed_cesarean = models.PositiveSmallIntegerField()
    birth_immedietly_breatfed_instrumentals = models.PositiveSmallIntegerField()
    birth_skin_to_skin_thearpy_normal = models.PositiveSmallIntegerField()
    birth_skin_to_skin_thearpy_cesarean = models.PositiveSmallIntegerField()
    birth_skin_to_skin_thearpy_instrumental = models.PositiveSmallIntegerField()
    
    #POST NATAL SECTION
    postnatal_breastfeed_women_receive_vitamin_A = models.PositiveSmallIntegerField()
    postnatal_breastfeed_women_with_muac_less_210 = models.PositiveSmallIntegerField()
    posnatal_breastfeed_women_with_malnutrition_support= models.PositiveSmallIntegerField()
    postnatal_domestic_visit_zero_to_three = models.PositiveSmallIntegerField()
    postnatal_post_natal_consultations_zero_to_six_hours = models.PositiveSmallIntegerField()
    postnatal_post_natal_consultations_seven_to_six_hours = models.PositiveSmallIntegerField()
    postnatal_post_natal_consultations_seven_to_forty_two_hours = models.PositiveSmallIntegerField()
    
    #COMPLICATIONS SECTIONS
    num_of_obstetric_complications_recorded = models.PositiveSmallIntegerField()
    num_of_obstetric_complications_referred = models.PositiveSmallIntegerField()
    
    #STILLBORNS
    stilborn_macerated = models.PositiveSmallIntegerField()
    stillborn_not_macerated = models.PositiveSmallIntegerField()
    
    maternal_death_num_in_hospital = models.PositiveSmallIntegerField()
    maternal_death_num_in_community = models.PositiveSmallIntegerField()
    
    #SUPPORT FOR WIFE AND MOTHER
    support_zero_to_three_first_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_second_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_third_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_total_visit = models.PositiveSmallIntegerField()
    support_four_to_six_first_visit = models.PositiveSmallIntegerField()
    support_four_to_six_second_visit = models.PositiveSmallIntegerField()
    support_four_to_six_third_visit = models.PositiveSmallIntegerField()
    support_four_to_six_forth_visit = models.PositiveSmallIntegerField()
    support_four_to_six_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_four_to_six_total_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_first_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_second_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_third_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_forth_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_total_visit = models.PositiveSmallIntegerField()
    support_total_visits_first_visit = models.PositiveSmallIntegerField()
    support_total_visits_second_visit = models.PositiveSmallIntegerField()
    support_total_visits_third_visit = models.PositiveSmallIntegerField()
    support_total_visits_forth_visit = models.PositiveSmallIntegerField()
    support_total_visits_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_total_visits_total_visit = models.PositiveSmallIntegerField()
    
    #SUPPORT FOR WOMEN HOSPITAL SECTION
    num_pregnancies_at_risk = models.PositiveSmallIntegerField()
    anemia_in_pregnant_women = models.PositiveSmallIntegerField()
    pregnant_women_receiving_iron_folate = models.PositiveSmallIntegerField()
    pregnant_women_treated_for_iron_deficiency_anemia = models.PositiveSmallIntegerField()
    pregnant_women_with_birth_plan = models.PositiveSmallIntegerField()
    pregnant_women_with_malaria_treated = models.PositiveSmallIntegerField()
    pregnant_women_received_impregnated_mosquito_net = models.PositiveSmallIntegerField()
    pregnant_women_muac_less_than_210 = models.PositiveSmallIntegerField()
    pregnant_women_mam_or_mas_supported = models.PositiveSmallIntegerField()

    #OTHER SERVICES SECTION
    folate = models.PositiveSmallIntegerField()
    women_receiving_acetic_acid_inspection = models.PositiveSmallIntegerField()
    women_positive_smear_test_taken_care_of = models.PositiveSmallIntegerField()
    women_receiving_post_abortion_care = models.PositiveSmallIntegerField()
    
    #DELIVERIES SECTION
    deliveries_less_than_15_normal = models.PositiveSmallIntegerField()
    deliveries_less_than_15_cesarean = models.PositiveSmallIntegerField()
    deliveries_less_than_15_instrumentals = models.PositiveSmallIntegerField()
    deliveries_15_to_19_normal = models.PositiveSmallIntegerField()
    deliveries_15_to_19_cesearean = models.PositiveSmallIntegerField()
    deliveries_15_to_19_instrumentals = models.PositiveSmallIntegerField()
    deliveries_20_to_24_normal = models.PositiveSmallIntegerField()
    deliveries_20_to_24_cesarean = models.PositiveSmallIntegerField()
    deliveries_20_to_24_instrumentals = models.PositiveSmallIntegerField()
    deliveries_25_to_29_normal = models.PositiveSmallIntegerField()
    deliveries_25_to_29_cesarean = models.PositiveSmallIntegerField()
    deliveries_25_to_29_instrumentals = models.PositiveSmallIntegerField()
    deliveries_30_and_more_normal = models.PositiveSmallIntegerField()
    deliveries_30_and_more_cesarean = models.PositiveSmallIntegerField()
    deliveries_30_and_more_instrumentals = models.PositiveSmallIntegerField()
    deliveries_unknown_normal = models.PositiveSmallIntegerField()
    deliveries_unknown_cesarean = models.PositiveSmallIntegerField()
    deliveries_unknown_instrumentals = models.PositiveSmallIntegerField()
    
    #LABOR MANAGEMENT SECTION
    labor_use_partograph = models.PositiveSmallIntegerField()
    labor_active_management_of_third_phase_labours = models.PositiveSmallIntegerField()
